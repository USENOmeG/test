from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.shortcuts import redirect, render, get_object_or_404

from .forms import *
from .models import *

from django.views.decorators.csrf import csrf_protect

from .utils import *

from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from .forms import ContactForm


def home(request):

    return render(request, 'index.html')


def services(request):

    return render(request, 'service.html')


def news(request):

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


def document(request):

    form = ContactForm  # modify the form to download document

    return render(request, 'document.html')


def term_of_use(request):

    return render(request, 'term-use.html')


def PPolicy(request):

    return render(request, 'privacy-policy.html')


def access(request):

    return render(request, 'access.html')
