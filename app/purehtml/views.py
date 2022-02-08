from django.shortcuts import render
from teammate.models import Teammate
from django.core import serializers
from json import dumps

# Create your views here.

def index(request):
    return render(request,'purehtml/index.html')

def button(request):
    return render(request, 'purehtml/button.html')

def interval(request):
    return render(request, 'purehtml/interval.html')

def list(request):
    # members = serializers.serialize("json",Teammate.objects.all())
    # dataJSON = dumps(members)
    # members = list(Teammate.objects.all())
    # names = {'names':members}
    return render(request, 'purehtml/list.html')