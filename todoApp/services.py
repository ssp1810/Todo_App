import json
from django.db import transaction
from rest_framework.response import Response
from rest_framework.status import HTTP_500_INTERNAL_SERVER_ERROR, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from todoApp.serializers import NotesSerializer
from todoApp.models import Notes


class NotesService:
    """
    Service layer for operations on notes
    """

    def __init__(self, request):
        self.request = request

    def create_note(self, request):
        """
        Creating a new note
        """
        try:
            # with transaction.atomic():
            data = {}
            data = json.loads(request)

            serialized_notes_data = NotesSerializer(data=data)
            if serialized_notes_data.is_valid():
                serialized_notes_data.save()
                return Response(serialized_notes_data.data, status=HTTP_201_CREATED)
            else:
                return Response({"Error": "Internal Server Error"}, status=HTTP_500_INTERNAL_SERVER_ERROR)

        except:
            return Response({"Error": "Internal Server Error"}, status=HTTP_500_INTERNAL_SERVER_ERROR)

    def get_notes_details(self, pk):
        try:
            todo_data = Notes.objects.get(id=pk)
            serialized_data = NotesSerializer(todo_data)
            if serialized_data.is_valid():
                return serialized_data.data
            else:
                return Response({"message": "Error in recieving data"}, status=HTTP_400_BAD_REQUEST)
        except Exception as exe:
            return exe

    def get_notes_list(self, request):
        try:
            notes = Notes.objects.all()
            serialized_notes_list = NotesSerializer(notes)
            if serialized_notes_list.is_valid():
                serialized_notes_list.save()
                return Response(serialized_notes_list.data, status=HTTP_201_CREATED)
            else:
                return Response({"Error": "Internal Server Error"}, status=HTTP_500_INTERNAL_SERVER_ERROR)  
        except Exception as exe:
            return exe          