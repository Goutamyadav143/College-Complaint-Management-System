from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Complaint
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes


@csrf_exempt
@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'All fields required'})

    if User.objects.filter(username=username).exists():
        return Response({'error': 'User already exists'})

    User.objects.create_user(username=username, password=password)
    return Response({'message': 'User registered successfully'})


@api_view(['POST'])
@permission_classes([IsAuthenticated])  
def create_complaint(request):

    title = request.data.get('subject')
    description = request.data.get('description')

    #  Category receive karo
    category = request.data.get('category')

    is_anonymous = request.data.get('is_anonymous', False)

    complaint = Complaint.objects.create(

        subject=title,
        description=description,

        #  Save category
        category=category,

        is_anonymous=is_anonymous,

        student=request.user
    )

    return Response({
        'message': 'Complaint created',
        'complaint_id': complaint.complaint_id
    })

@csrf_exempt
@api_view(['POST'])
def login(request):
    print("🔹 Request data:", request.data)  # Yeh dekho kya aa raha hai
    username = request.data.get('username')
    password = request.data.get('password')
    print(f"🔹 Username: '{username}', Password: '{password}'")  # Quotes mein dekho

    from django.contrib.auth import authenticate
    user = authenticate(username=username, password=password)
    print("🔹 Authenticated user:", user)

    if user is not None:
        from rest_framework.authtoken.models import Token
        token, _ = Token.objects.get_or_create(user=user)
        print("🔹 Token:", token.key)
        return Response({'access': token.key})
    else:
        print("🔹 Authentication failed")
        return Response({'error': 'Invalid credentials'}, status=401)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_complaints(request):
    complaints = Complaint.objects.filter(student=request.user)

    data = []
    for c in complaints:
        data.append({
            "id": str(c.complaint_id),
            "subject": c.subject,
            "category": c.category,
            "status": c.status,
            "created_at": c.created_at,

            "admin_reply": c.admin_reply,

            "created_at": c.created_at,
        })

    return Response(data)

@api_view(['GET'])
def complaint_stats(request):
    total = Complaint.objects.count()
    pending = Complaint.objects.filter(status='Pending').count()
    resolved = Complaint.objects.filter(status='Resolved').count()

    return Response({
        "total": total,
        "pending": pending,
        "resolved": resolved
    })