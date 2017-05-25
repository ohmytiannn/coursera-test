<?php
    echo "help";
  require_once('E:/xampp/htdocs/wordpress/wp-content/plugins/shortcode/config.php');



  $token  = $_POST['stripeToken'];
  $email = $_POST['stripeEmail'];


  $customer = \Stripe\Customer::create(array(
      'email' => $email,
      'card'  => $token
  ));



  $charge = \Stripe\Charge::create(array(
      'customer' => $customer->id,
      'amount'   => $data_amount,
      'currency' => 'usd',
  ));



  

?>