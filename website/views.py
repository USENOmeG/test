from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse, HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect, render, get_object_or_404

# from .forms import user_info
from .models import *

from django.views.decorators.csrf import csrf_protect

from .utils import *

from django.shortcuts import render
from django.core.mail import send_mail
from .forms import ContactForm


def home(request):
    """
    adding rad-cards.objects selection if needed in the specific page.
    It does the same thing when adding other contents. From django 5.0.6
    """

    # rad_card = rad_content.objects.all()
    # context = {'rad_card': rad_card}
    return render(request, 'index.html')


def services(request):

    return render(request, 'service.html')


def news(request):

    # news = news_content.objects.all()
    # context = {'news': news}

    return render(request, 'news.html')


def plans(request):

    return render(request, 'plans.html')


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


def contact(request):

    return render(request, 'contact.html')


def company_index(request):

    return render(request, 'company_index.html')


def document(request):

    form = ContactForm  # modify the form to download document

    return render(request, 'document.html')


def term_of_use(request):

    return render(request, 'term-use.html')


def PPolicy(request):

    return render(request, 'privacy-policy.html')


def access(request):

    return render(request, 'access.html')


def service_detail1(request):

    return render(request, 'serviceDetail1.html')


def service_detail2(request):

    return render(request, 'serviceDetail2.html')


def service_detail3(request):

    return render(request, 'serviceDetail3.html')


def service_detail4(request):

    return render(request, 'serviceDetail4.html')


def about_us(request):

    return render(request, 'about-us.html')


# def sign_up(request):
#     """
#     creating user for login.
#     That makes the website un visitable on internet without it.
#     """

#     user_info = user_info

#     user_name = user_name
#     mail_address = mail_address
#     password1 = password1
#     password2 = password2

#     if user_info.method == 'GET':
#         save.user_name == user_name
#         save.mail_address == mail_address
#         save.password == password1

#     return render(request, 'sign_up.html')

def rad_card(request):

    rad_card = rad_content.objects.all()
    context = {'rad_card': rad_card}
    return render(request, 'rad_card.html', context)

# For accounts


def login(request):

    return render(request, 'login.html')


def signIn(request):

    return render(request, 'signIn.html')


def case_study(request):

    return render(request, 'case_study.html')


def about_case_study(request):

    return render(request, 'about_case_study.html')
