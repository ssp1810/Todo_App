from django.urls import path
from todoApp.views import NotesView

urlpatterns = [
    path('createNote', NotesView.as_view()),
    path('get_notes', NotesView.as_view()),
    path('get_note/<int:id>', NotesView.as_view())
]