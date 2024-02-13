from app import app
from models import db, User, Project, User_Project, Project_Comment
import datetime

with app.app_context():
    print("Deleting users...")
    User.query.delete()

    print("Creating users...")
    user1 = User(username="barrett", password="password",email="barrett@test.com",first_name="Barrett",last_name="Kowalsky",image="https://avatars.githubusercontent.com/u/57696136?s=400&u=59ab1c32b67f268bb3dc47e3aeee6534e1b08ba4&v=4",wallet_address="0x1234")
    user2 = User(username="tester", password="password",email="joe@joe.com",first_name="Joe",last_name="Smith",image="https://avatars.githubusercontent.com/u/57696136?s=400&u=59ab1c32b67f268bb3dc47e3aeee6534e1b08ba4&v=4",wallet_address="0x5678")
    user3 = User(username="chatGPT", password="openai", email="chatgpt@openai.com", first_name="Chat", last_name="GPT", image="https://static-00.iconduck.com/assets.00/openai-icon-505x512-pr6amibw.png", wallet_address="0x91011")

    db.session.add_all([user1, user2, user3])
    db.session.commit()

    print("Deleting projects...")
    Project.query.delete()

    print("Creating projects...")
    project1 = Project(name="fundOS Funding",type="Programming",image="./src/assets/fundOS.png", description="""Help us fund the next generation of crowdfunding. With fundOS, users can sign into the platform using their Metamask wallet and easily spin up crowdfunding campaigns. Describe your project, set a funding goal and a deadline, and publish it directly to the blockchain. We use web3 tech to enable full transparency with our users, incorporating smart contracts to decentralize the application. Users can then help fund your project by contributing eth. Once a project hits its goal, owners get funds deposited to their accounts immediately, with no percentage taken by the fundOS platform. Please use this project to contribute to the fundOS platform directly - and we follow the same rules as everyone else. If we don’t hit our funding goal by the deadline, our project will die. Keep us alive by donating today!

    Our roadmap includes updates to the smart contract, in which users funds will be pooled and staked to earn “interest”, which will then be returned to our users. 

    Help us out! """,funding_needed=1000,deadline=datetime.datetime(2024, 0o2, 16),user_id=1, status=True)
    project2 = Project(name="SweatSpectrum",type="Lifestyle",image="./src/assets/SweatSpectrum.png", description="""
    Introducing SweatSpectrum, your ultimate fitness companion designed to revolutionize the way you track and analyze your workout data. Whether you're a seasoned gym-goer, a dedicated runner, or just starting your fitness journey, SweatSpectrum empowers you to take control of your workouts like never before.

    With SweatSpectrum, you can seamlessly track every aspect of your fitness routine, from the duration and intensity of your workouts to the number of calories burned and the distance covered. Say goodbye to pen and paper or clunky spreadsheets—our intuitive interface makes it easy to log your activities with just a few taps, so you can focus on crushing your fitness goals.

    But SweatSpectrum is more than just a workout tracker—it's a comprehensive fitness tool that provides valuable insights to help you optimize your training regimen. Our advanced analytics engine crunches the numbers to deliver personalized recommendations based on your performance, helping you identify areas for improvement and tailor your workouts for maximum results.

    So why wait? Join the SweatSpectrum community today and take the first step towards a fitter, stronger, and more confident you. With SweatSpectrum, the possibilities are endless—and the results are within reach.""",funding_needed=1000,deadline=datetime.datetime(2024, 0o3, 14),user_id=2, status=True)
    project3 = Project(name="QuantumGlo Smart Planters", type="Lifestyle", image="https://images.squarespace-cdn.com/content/v1/51e2b920e4b084ee7b28f247/1559224009626-LJWK2HV4YF9X2SBA5C9C/ke17ZwdGBToddI8pDm48kHcJvvfWrCzxgAO5EoxnnQNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw4ThC-BxSu5tiEw7cUjO-K2J1hi8hiTVKTXuEbC1G3N-bKDz206Z-n2dQ83q2xVpc/LUA-tracking.gif", description="""Introducing QuantumGlo Smart Planters, the revolutionary gardening solution that brings the future to your backyard. These state-of-the-art planters utilize quantum technology to optimize plant growth, ensuring lush and vibrant gardens with minimal effort.

    The QuantumGlo Smart Planters are equipped with sensors that monitor soil moisture, nutrient levels, and ambient light. Using advanced algorithms, the planters intelligently adjust watering schedules and nutrient distribution, creating the perfect environment for your plants to thrive.

    Imagine having a garden that adapts to the unique needs of each plant, maximizing their potential for growth and yield. The QuantumGlo app allows you to customize settings, receive real-time updates on your plants’ health, and even control the planter remotely.

    Not only are QuantumGlo Smart Planters functional, but they also boast a sleek, modern design that enhances the aesthetic appeal of any outdoor space. The planters come in various sizes and styles, catering to different gardening preferences.

    Join us in revolutionizing home gardening with QuantumGlo Smart Planters. Back our project today and be part of the green movement that combines technology and nature for a brighter, more sustainable future.""", funding_needed=250000, deadline=datetime.datetime(2024, 0o3, 14), user_id=3, status=True)

    project4 = Project(name="EchoBlend Harmony Tea Infuser", type="Lifestyle", image="https://worldteadirectory.com/wp-content/uploads/2021/02/4692-mmbuzr.jpg", description="""Embark on a sensory journey with EchoBlend Harmony, the ultimate smart tea infuser designed to elevate your tea-drinking experience. Crafted with precision and innovation, this cutting-edge device combines traditional brewing methods with modern technology.

    The EchoBlend Harmony Tea Infuser features a built-in water heating system, allowing you to select the perfect temperature for your favorite teas through a user-friendly interface. Its intelligent steeping mechanism ensures optimal infusion times, guaranteeing a cup of tea that’s rich in flavor and aroma.

    Connect the infuser to the EchoBlend app to explore a curated collection of tea recipes, each designed to enhance your well-being. From energizing morning blends to relaxing evening chamomile, EchoBlend Harmony offers a personalized tea experience tailored to your preferences.

    The sleek and ergonomic design of the EchoBlend Harmony Tea Infuser adds a touch of elegance to any kitchen. Its glass carafe allows you to witness the mesmerizing dance of tea leaves as they unfurl, creating a visual spectacle that complements the delightful taste.

    Back the EchoBlend Harmony project now and embark on a journey of tea exploration. Immerse yourself in the world of flavors, aromas, and well-being with this state-of-the-art smart tea infuser.""", funding_needed=125600, deadline=datetime.datetime(2024, 0o3, 14), user_id=3, status=True)

    project5 = Project(name="PawsPlay Interactive Pet Companion", type="Lifestyle", image="https://www.petoi.com/cdn/shop/files/bittlestemkitdarkblueyellowblack-faceright4x3_1206x.jpg?v=1692588002", description="""Introducing PawsPlay, the next-generation interactive pet companion that brings joy and stimulation to your furry friends. This innovative device is designed to enhance the well-being of your pets through play, engagement, and companionship.

    PawsPlay is equipped with a variety of interactive features, including automated treat dispensing, customizable LED light patterns, and a built-in camera for remote monitoring. With the accompanying PawsPlay app, you can schedule play sessions, dispense treats, and even engage in live video chats with your pets, keeping them entertained and connected, even when you’re away.

    The device is intelligently designed to adapt to your pet’s behavior, learning their preferences and adjusting its activities accordingly. Whether it’s a game of chase, a treat-dispensing puzzle, or a soothing light display, PawsPlay provides a personalized and enriching experience for your beloved pets.

    The sleek and durable design of PawsPlay ensures it seamlessly integrates into your home environment. It’s not just a pet gadget; it’s a companion that fosters a deeper bond between you and your four-legged family members.

    Join us in creating a world where pets are happier and more engaged. Back the PawsPlay project today and bring this interactive pet companion to homes around the globe. Your support makes tails wag and purrs resonate with joy!""" , funding_needed=50000, deadline=datetime.datetime(2024, 0o3, 14), user_id=3, status=True)

    db.session.add_all([project1, project2, project3, project4, project5])
    db.session.commit()

    print("Deleting user_projects...")
    User_Project.query.delete()

    print("Creating user_projects...")
    #Barrett funding project 1 - fundOS
    user_project1 = User_Project(user_id=1,project_id=1, user_funded_amount=10)
    #Barrett funding project 2 - SweatSpectrum
    user_project2 = User_Project(user_id=1,project_id=2, user_funded_amount=12)
    #Test funding project 1 - fundOS
    user_project3 = User_Project(user_id=2,project_id=1, user_funded_amount=210)

    db.session.add_all([user_project1, user_project2, user_project3])
    db.session.commit()

    print("Deleting comments...")
    Project_Comment.query.delete()

    print("Creating comments...")
    comment1 = Project_Comment(user_id=1,project_id=1,comment_text="This is me commenting on my own project - how vain!")

    comment2 = Project_Comment(user_id=2,project_id=3,comment_text="Such an incredible idea! I'll donate 1000 ETH to this project!")

    db.session.add(comment1)
    db.session.commit()

    print("Seeding complete!")
