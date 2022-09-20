from django.contrib import messages, auth

from django.shortcuts import render, redirect


# Create your views here.
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return redirect('new/')
        else:
            messages.info(request, "Invalid")
            return redirect('login')
    return render(request, "login.html")


def demo(request):
    return render(request, "index.html")

def form(request):
    return render(request, "form.html")
def msg (request):
    return render(request, "msg.html")
def new (request):
    return render(request, "new.html")
def logout(request):
    auth.logout(request)
    return redirect('/')