class Clock :
    def __init__(self, hour, minutes) :
        self.clean_hour_and_minutes(hour, minutes)

    def __str__(self) :
        return "{0}:{1}".format(self.add_zero(self._hour), self.add_zero(self._minutes))

    def __eq__(self, other) :
        if self._hour    != other._hour:    return False
        if self._minutes != other._minutes: return False
        return True

    def add_zero(self, num) :
        if num >= 10 :
            return str(num)
        else :
            return "0" + str(num)

    def add(self, minutes) :
        new_minutes  = self._minutes + minutes
        self.clean_hour_and_minutes(self._hour, new_minutes)
        return self

    def clean_hour_and_minutes(self, hour, minutes) :
        hour   += minutes / 60
        minutes = minutes % 60
        hour    = hour % 24

        self._minutes = minutes
        self._hour    = hour


