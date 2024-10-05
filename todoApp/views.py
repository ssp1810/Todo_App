import json
from django.shortcuts import render
from rest_framework import views
from rest_framework.response import Response
from rest_framework.status import HTTP_500_INTERNAL_SERVER_ERROR, HTTP_200_OK
from todoApp.services import NotesService


class NotesView(views.APIView):
    def post(self, request):
        try:
            data = {
                'note_title': request.data.get('note_title'),
                'note_body': request.data.get('note_body'),
                'user': request.data.get('user')
            }
            notes_service = NotesService(data)    
            res = notes_service.create_note(request=request)
            return res
        except:
            return Response({"Error": "Internal Server error"}, status=HTTP_500_INTERNAL_SERVER_ERROR)

    def get(self, request, **kwargs):
        try:
            notes_service = NotesService(request.data)
            pk = kwargs.get('pk')
            if pk:
                """
                Get data based on pk
                """
                data = notes_service.get_notes_details(pk)
                return Response(data, status=HTTP_200_OK)
            else:
                response = notes_service.get_notes_list(request)
                return Response({"total": len(response[1]), "results": response[0]}, status=HTTP_200_OK)
        except:
            return Response({"Error": "Internal Server error"}, status=HTTP_500_INTERNAL_SERVER_ERROR)
