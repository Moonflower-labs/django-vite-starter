from django.conf import settings
from django.shortcuts import render
from django.views import View


class ServeReactAppView(View):
    """
    Serve the React app.
    """

    def get(self, request, *args, **kwargs):
        context = {'debug': settings.DEBUG}

        return render(request, 'index.html', context)
