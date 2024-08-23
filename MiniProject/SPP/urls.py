from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    # Your app's views
    
  
    # Django admin site (include only once)
    path('admin/', admin.site.urls),
    path('index/', views.display_vocabulary, name='display_vocabulary'),
    path('', views.login, name='login'),
    path('about/', views.about, name='about'),
    path('index/', views.index, name='index'),
    path('profie/', views.profie, name='profie'),
    path('signup/', views.signup, name='signup'),
    path('test/', views.test, name='test'),
    path('test1/', views.test1, name='test1'),
    path('test2/', views.test2, name='test2'),
    path('test3/', views.test3, name='test3'),
    path('test4/', views.test4, name='test4'),
    path('test5/', views.test5, name='test5'),
]