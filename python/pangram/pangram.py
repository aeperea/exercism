from __future__ import unicode_literals
import string

def is_pangram(sentence) :
    alph_letters     = list(string.lowercase[:27])
    alphabet_counter = dict(map((lambda x: (x, 0)), alph_letters))
    sent_letters     = list(sentence.lower())

    for char in sent_letters :
        if char in alph_letters :
          alphabet_counter[char] += 1

    for k,v in alphabet_counter.iteritems() :
        if v == 0 :
          return False
        else :
          continue

    return True
