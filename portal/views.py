from django.db import IntegrityError
from django.forms import ValidationError
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import check_password

from .models import User, Topic

# Create your views here.
def index(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse("dashboard"))
    
    return render(request, "portal/index.html")


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        password = request.POST["password1"]
        confirm_password = request.POST["password2"]
        
        if password != confirm_password:
            return render(request, "portal/index.html", {"message": "Passwords must match."})

        try:
            newuser = User.objects.create_user(username, email, password)
            newuser.save()
            
        except IntegrityError:
            return render(request, "portal/index.html", {"message": "Username already taken."})
        except ValidationError:
            return render(request, "portal/index.html", {"message": "Invalid data."})
        except Exception as e:
            return render(request, "portal/index.html", {"message": e})
        
        login(request, newuser)
        return HttpResponseRedirect(reverse("dashboard"))
    
    return HttpResponseRedirect(reverse("index"))


def signin(request):
    if request.method == "POST":
        
        if request.user.is_authenticated:
            return HttpResponseRedirect(reverse("dashboard"))
        
        username = request.POST["loginUsername"]
        password = request.POST["loginPassword"]
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("dashboard"))
        
        try:
            user = User.objects.get(username=username)
            return render(request, "portal/index.html", {
                "message": "Wrong password.",
                "username": username,
            })
        
        except User.DoesNotExist:
            return render(request, "portal/index.html", {"message": "Invalid credentials."})
    
    return HttpResponseRedirect(reverse("index"))


@login_required(login_url='/')
def dashboard(request):
        
    return render(request, "portal/dashboard.html", {
        "user": request.user,
    })


def signout(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


    # TO SAVE NEW TOPIC WITH INTERESTED USERS
    # topic = 'programming'

    # try:
    #     topic = Topic.objects.get(topic=topic)
    # except Topic.DoesNotExist:
    #     topic = Topic(topic=topic)
    #     topic.save()
        
    # if topic not in request.user.interested_topics.all():
    #     request.user.interested_topics.add(topic)
    #     request.user.save()
        
    # topics = Topic.objects.all()
    # for topic in topics:
    #     print(topic.topic)
    #     print(topic.interested_users.all())
