from django.contrib import messages
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth import authenticate
from django.http import JsonResponse, HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect, render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout as auth_logout

# from .forms import user_info
from .models import *

from django.views.decorators.csrf import csrf_protect

from .utils import *

from django.shortcuts import render
from django.core.mail import send_mail
from .forms import ContactForm, LoginForm


@login_required
def home(request):
    """
    Render the home page only if the user is authenticated.
    Otherwise, redirect to the login page.
    """

    rad_card = rad_content.objects.all().order_by('-time_stamp')
    news_card = rad_content.objects.filter(
        genres='NEWS').order_by('-time_stamp')
    context = {'rad_card': rad_card, 'news': news_card}
    return render(request, 'index.html', context)


def radCard_detail(request, pk):
    """
    For this in html tag, it does not have to be for looped.
    Simply, add headers and contents that I need to be displayed.
    """

    card_detail = get_object_or_404(rad_content, pk=pk)
    context = {'card_detail': card_detail}

    return render(request, 'radCard_detail.html', context)


@login_required
def services(request):

    return render(request, 'service.html')


@login_required
def news(request):

    news_card = rad_content.objects.filter(
        genres='NEWS').order_by('-time_stamp')

    context = {'news': news_card}

    return render(request, 'news.html', context)


@login_required
def help(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            # Send email
            send_mail(
                f'New Form Submission from {name}',
                f'Name: {name}\nEmail: {email}\nMessage:\n{message}',
                'your_email@example.com',  # Sender's email address
                ['recipient_email@example.com'],  # Recipient's email address
                fail_silently=False,
            )

            # Redirect to a thank-you page or display a success message
            return HttpResponseRedirect('/thank-you/')
    else:
        form = ContactForm()

    return render(request, 'help.html')


@login_required
def contact(request):
    """
    Has to be sendable to certain e-mail or at least, to admin page.
    Yet, neither of them are applied.
    """

    return render(request, 'contact.html')


@login_required
def company_index(request):

    return render(request, 'company_index.html')


@login_required
def term_of_use(request):

    return render(request, 'term-use.html')


@login_required
def PPolicy(request):

    return render(request, 'privacy-policy.html')


@login_required
def service_detail1(request):

    return render(request, 'serviceDetail1.html')


@login_required
def service_detail2(request):

    return render(request, 'serviceDetail2.html')


@login_required
def service_detail3(request):

    return render(request, 'serviceDetail3.html')


@login_required
def service_detail4(request):

    return render(request, 'serviceDetail4.html')


@login_required
def about_us(request):

    return render(request, 'about-us.html')

# For accounts


def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            # Note: 'username' is the email in the form
            email = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=email, password=password)
            if user is not None:
                auth_login(request, user)
                return redirect('/')
            else:
                messages.error(request, 'Invalid email or password')
    else:
        form = LoginForm()

    return render(request, 'login.html', {'form': form})


@login_required
def logout(request):
    auth_logout(request)
    return redirect('login')


def signIn(request):

    return render(request, 'signIn.html')


@login_required
def case_study(request):

    rad_card = rad_content.objects.filter(
        genres='CASE').order_by('-time_stamp')
    context = {'rad_card': rad_card}

    return render(request, 'case_study.html', context)


@login_required
def about_case_study(request):

    return render(request, 'about_case_study.html')
