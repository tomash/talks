!SLIDE

# enough of the business / advertisement bullshit
### back to 50 LOC startup


!SLIDE code

tomek@tomek-U36SD:~/rails_apps/bookrage.org$ rake stats

+----------------------+-------+-------+
| Name                 | Lines |   LOC |
+----------------------+-------+-------+
| Controllers          |    25 |    19 |
| Helpers              |    23 |    18 |
| Models               |    19 |    12 |
| Libraries            |     0 |     0 |
| Integration tests    |     0 |     0 |
| Functional tests     |    98 |    71 |
| Unit tests           |    54 |    28 |
+----------------------+-------+-------+
| Total                |   219 |   148 |
+----------------------+-------+-------+
  Code LOC: 49     Test LOC: 99


!SLIDE

# cheating: behind-the-scenes of "magic"

### gem 'rage_core' # almost all backend code


!SLIDE

# but still, first release of MusicRage:


!SLIDE code

    $ rake stats
    +----------------------+-------+-------+
    | Name                 | Lines |   LOC |
    +----------------------+-------+-------+
    | Controllers          |   109 |    90 |
    | Helpers              |    21 |    17 |
    | Models               |   180 |   138 |
    | Libraries            |     0 |     0 |
    | Integration tests    |     0 |     0 |
    | Functional tests     |    59 |    43 |
    | Unit tests           |    42 |    18 |
    +----------------------+-------+-------+
    | Total                |   411 |   306 |
    +----------------------+-------+-------+
      Code LOC: 245     Test LOC: 61     
      Code to Test Ratio: 1:0.2


!SLIDE

# That's 245 total lines of code.
### ...how?


!SLIDE bullets incremental

# delegate **ALL THE RESPONSIBILITES**

* payment processing: PayPal (and DotPay)
* hosting files: Amazon S3
* sending emails: SendGrid
* content management: rails_admin


!SLIDE

# only implement what's really necessary


!SLIDE

# no user accounts
## Seriously, you don't need a login everywhere
### /orders/#{SecureRandom.urlsafe_base64}

!SLIDE

# Side Bonus
## cheap Page Caching


!SLIDE

# "Soft" anti-piracy
### S3 expiring_url + analytics


!SLIDE

# Conclusion?
### Today's Rails + SaaS ecosystem
### leaves no excuses.
### Build interesting stuff in short time!