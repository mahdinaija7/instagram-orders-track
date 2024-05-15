from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login

class LoginAPIView(APIView):
    def post(self, request):
        # Extract username and password from request data
        username = request.data.get('username')
        password = request.data.get('password')

        # Authenticate user
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # User is authenticated, login the user
            login(request, user)

            # Generate or retrieve authentication token
            token, created = Token.objects.get_or_create(user=user)

            # Return success response with token
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        else:
            # Authentication failed, return error response
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        

def check_authentication(request):
    is_authenticated = request.user.is_authenticated
    return JsonResponse({'isAuthenticated': is_authenticated})
