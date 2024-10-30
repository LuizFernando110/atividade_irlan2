from django.shortcuts import render

# Create your views here.
def calcularImc(request):
    return render(request, 'imc.html')