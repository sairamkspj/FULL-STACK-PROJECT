from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserRegistrationSerializer


@api_view(['POST'])
def register_user(request):
    print("📥 Step 1 - Incoming Data from client:", request.data)

    serializer = UserRegistrationSerializer(data=request.data)
    print("🛠️ Step 2 - Serializer created with data")

    if serializer.is_valid():
        print("✅ Step 3 - Data is valid")
        user = serializer.save()
        print("💾 Step 4 - User saved into DB:", user)

        return Response({
            "message": "User registered successfully!",
            "saved_user": {
                "id": user.id,
                "username": user.username,
                "email": user.email
            }
        })
    else:
        print("❌ Step 3 - Validation failed:", serializer.errors)
        return Response(serializer.errors, status=400)
