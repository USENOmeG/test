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
    path('access', access, name='access'),
    path('service1', service_detail1, name="service1"),
    path('service2', service_detail2, name="service2"),
    path('service3', service_detail3, name="service3"),
    path('service4', service_detail4, name="service4"),
    path('about/company-index', company_index, name="company-index")
]
