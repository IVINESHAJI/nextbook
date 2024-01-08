from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("register", views.register, name="register"),
    path("signin", views.signin, name="signin"),
    path("dashboard", views.dashboard, name="dashboard"),
    path("signout", views.signout, name="signout"),
    path('profile', views.profile, name="profile"),
    
    path("accounts/login/", views.signin, name="signin"),
]