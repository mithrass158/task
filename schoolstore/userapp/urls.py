from.import views
from django.urls import path
# app_name='userapp'
app_name='store'
urlpatterns = [
    path('',views.demo,name='demo'),
    path('login', views.login, name='login'),
    path('form/',views.form,name='form'),
    path('msg/', views.msg, name='msg'),
    path('new/', views.new, name='new'),
    path('logout',views.logout,name='logout'),
    ]