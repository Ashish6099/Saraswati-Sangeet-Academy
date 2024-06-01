<?php
session_start();
include("connect.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Profile</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
  <style>
    /* General Styles */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    /* Navigation Styles */
nav {
  background-color: #428cf4;
  color: #fff;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh; /* Full height */
  position: fixed; /* Fixed position */
  left: 0;
  top: 0;
  width: 200px; /* Adjust the width as needed */
  z-index: 1000; /* Ensure navigation stays on top of other content */
  transition: width 0.3s ease; /* Add smooth transition effect */
}

.nav-brand {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: auto; /* Push to the bottom */
}


.nav-links {
  margin-top: auto; /* Push to the top */
}

.nav-links a {
  text-decoration: none;
  flex-direction:column;
  color: #fff;
  margin: 10px 0;
  padding-top:40px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #f2f2f2;
}

/* Main Content Styles */
.main-content {
  margin-left: 250px; /* Same width as nav */
  padding: 20px;
  transition: margin-left 0.3s ease; /* Add smooth transition effect */
}

/* Footer Styles */
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}


   
  </style>
</head>
<body>
  <nav>
    <div class="nav-brand">
      <a href="index.html">
        <img src="student.png" alt="Logo">
      </a>
    </div>
    <div class="nav-links">
      <a href="profile.php"><i class="fas fa-user"></i> Profile</a>
      <a href="courses.php"><i class="fas fa-book"></i> Courses</a>
      <a href="fees.php"><i class="fas fa-money-bill-wave"></i> Fees</a>
      <a href="logout.php"><i class="fas fa-sign-out-alt"></i> Logout</a>
    </div>
  </nav>

  <div class="main-content">
    <section class="welcome-section">
      <h1>
        Hello, <?php
        if (isset($_SESSION['email'])) {
          $email = $_SESSION['email'];
          $query = mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
          while ($row = mysqli_fetch_array($query)) {
            echo $row['firstName'] . ' ' . $row['lastName'];
          }
        }
        ?>
      </h1>
      <nav>
      <a href="index.html"><i class="fas fa-home"></i> Home</a>
      </nav>
      <header>
        Dasboard
      </header>
      <p>Welcome to our e-learning platform. Explore our courses and expand your knowledge.</p>
    </section>

    <section class="student-details">
      <h2>Student Details</h2>
      <ul>
        <?php
        if (isset($_SESSION['email'])) {
          $email = $_SESSION['email'];
          $query = mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
          while ($row = mysqli_fetch_array($query)) {
            echo '<li><strong>Name:</strong> ' . $row['firstName'] . ' ' . $row['lastName'] . '</li>';
            echo '<li><strong>Email:</strong> ' . $row['email'] . '</li>';
            echo '<li><strong>Phone:</strong> ' . $row['phone'] . '</li>';
            // Add more student details as needed
          }
        }
        ?>
      </ul>
    </section>
  </div>

  <footer>
    <p>&copy; Your Website. All rights reserved.</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
