from django.urls import path, include
from .views import *

app_name = 'uHoldings'

urlpatterns = [
    path('', home, name='home'),
    path('service', services, name='service'),
    path('news', news, name='news'),
    path('plans', plans, name='plans'),
    path('help', help, name='help'),
    path('contact', contact, name='contact'),
    path('doc', document, name='document'),
    path('privacy-policy', PPolicy, name='PPolicy'),
    path('term-of-use', term_of_use, name='terms'),
    path('access', access, name='access')
]
