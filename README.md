# Reset Password App

This password reset app sends out an email with password reset link if the user account is valid.

# Launch URL:

https://passwordresetapp-frontend.vercel.app/

# How Does it Work?

1. Home page launches with a simple UI, Navbar containing login and signup button.
2. To create an account, click login and submit required details. This will re-direct to login page.
3. Enter the credentials, it will redirect to a simple landing page.
4. Password reset link will be available in login page, plese click, enter the registered email address and hit submit.
5. if the email belongs to a valid account, an email will be sent the said email address with a random string appended to the URL.
6. If the random string matches with random string in DB, password reset is allowed, the use can enter the new password which will redirect to the login page.
