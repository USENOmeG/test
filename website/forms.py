from django import forms
from django.contrib.auth.forms import AuthenticationForm

where_from = ['知人', 'インターネット検索', '掲示板', 'ネット広告', 'その他']

subject = ['相談', '料金プラン', 'ご意見/ご要望', 'その他']

country = ['日本', 'アメリカ']


class LoginForm(AuthenticationForm):
    username = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'Email Address'}),
        label=False,
        required=True  # Make username field required
    )
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'placeholder': 'Password'}),
        label=False,
        required=True  # Make password field required
    )


class ContactForm(forms.Form):
    company = forms.CharField(max_length=50, required=True)
    country = forms.Select(country)
    name = forms.CharField(max_length=100, required=True)
    email = forms.EmailField(max_length=100, required=True)
    phone_number = forms.CharField(max_length=20, required=False)
    where_from = forms.Select(where_from)
    subject = forms.Select(subject)
    message = forms.CharField(widget=forms.Textarea)
