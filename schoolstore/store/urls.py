from.import views
from django.urls import path
# app_name='store'
urlpatterns=[
    path('register',views.register,name='register'),
    path('login', views.login, name='login'),
    path('logout',views.logout,name='logout'),
    path('form/',views.form,name='form'),
    path('msg/',views.msg,name='msg'),
    path('new/',views.new,name='new'),
]