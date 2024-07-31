from django.urls import path, include
from .views import *
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin

app_name = 'uHoldings'

urlpatterns = [
    path('', home, name='home'),
    path('radCard/<int:pk>/', radCard_detail, name='radCard_detail'),
    path('service', services, name='service'),
    path('news', news, name='news'),
    path('help', help, name='help'),
    path('contact', contact, name='contact'),
    path('privacy-policy', PPolicy, name='PPolicy'),
    path('term-of-use', term_of_use, name='terms'),
    path('service1', service_detail1, name="service1"),
    path('service2', service_detail2, name="service2"),
    path('service3', service_detail3, name="service3"),
    path('service4', service_detail4, name="service4"),
    path('about/company-index', company_index, name="company-index"),
    path('login', login_view, name="login"),
    path('logout/', logout, name='logout'),
    path('signIn', signIn, name='signIn'),
    path('case_study', case_study, name='cases'),
    path('about_case_study', about_case_study, name='about_case_study'),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
