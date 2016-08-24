class Clock :
    def __init__(self, hour, minutes) :
        self._hour    = hour
        self._minutes = minutes
        self.clean_hour_and_minutes()

    def __str__(self) :
        return "%02d:%02d" % (self._hour, self._minutes)

    def __eq__(self, other) :
        return self._hour == other._hour and self._minutes == other._minutes

    def add(self, minutes) :
        self._minutes += minutes
        self.clean_hour_and_minutes()
        return self

    def clean_hour_and_minutes(self) :
        self._hour   += self._minutes / 60
        self._minutes = self._minutes % 60
        self._hour   %= 24
