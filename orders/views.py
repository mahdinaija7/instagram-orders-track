from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import OrderSerializer,ClientSerializer
from .models import Order,Client


@csrf_exempt
@api_view(["GET","POST"])
def orders_list(request):
    if request.method == "GET":
        orders = Order.objects.all()
        serializer = OrderSerializer(orders,many=True)
        return JsonResponse({"orders":serializer.data})
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = OrderSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
    


@csrf_exempt
@api_view(["GET","PUT","DELETE"])
def order_detail(request,id):
    try:
        order = Order.objects.get(pk=id)
    except Order.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method =="GET":
        serializer = OrderSerializer(order)
        return Response(serializer.data)

    elif request.method =="PUT":
        serializer = OrderSerializer(order,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method =="DELETE":
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

@csrf_exempt
@api_view(["GET","POST"])
def clients_list(request):
    if request.method == "GET":
        clients = Client.objects.all()
        serializer = ClientSerializer(clients,many=True)
        return JsonResponse({"clients":serializer.data})
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ClientSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_404_NOT_FOUND)
    



@csrf_exempt
@api_view(["DELETE","PUT"])
def client_detail(request,id):
    try:
        client = Client.objects.get(pk=id)
    except Client.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method =="GET":
        serializer = ClientSerializer(client)
        return Response(serializer.data)

    elif request.method =="PUT":
        serializer = ClientSerializer(client,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method =="DELETE":
        client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)