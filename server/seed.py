from app import app
from models import db, User, Project, User_Project, Project_Comment
import datetime

with app.app_context():
    print("Deleting users...")
    User.query.delete()

    print("Creating users...")
    user1 = User(username="barrett", password="password",email="barrett@test.com",first_name="Barrett",last_name="Kowalsky",image="https://avatars.githubusercontent.com/u/57696136?s=400&u=59ab1c32b67f268bb3dc47e3aeee6534e1b08ba4&v=4",wallet_address="0x1234")

    db.session.add(user1)
    db.session.commit()

    print("Deleting projects...")
    Project.query.delete()

    print("Creating projects...")
    project1 = Project(name="fundOS Funding",type="Programming",image="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/116_Ethereum_logo_logos-512.png", description="This is a project that will hopefully one day be somewhat decentralized.",funding_needed=1000,deadline=datetime.datetime(2024, 0o2, 16),user_id=1, status=True)
    project2 = Project(name="SweatSpectrum",type="Lifestyle",image="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/116_Ethereum_logo_logos-512.png", description="This is a project that helps you track your workouts.",funding_needed=1000,deadline=datetime.datetime(2024, 0o3, 14),user_id=2, status=True)

    db.session.add_all([project1, project2])
    db.session.commit()

    print("Deleting user_projects...")
    User_Project.query.delete()

    print("Creating user_projects...")
    #Barrett funding project 1 - fundOS
    user_project1 = User_Project(user_id=1,project_id=1, user_funded_amount=10)
    #Barrett funding project 2 - SweatSpectrum
    user_project2 = User_Project(user_id=1,project_id=2, user_funded_amount=12)

    db.session.add_all([user_project1, user_project2])
    db.session.commit()

    print("Deleting comments...")
    Project_Comment.query.delete()

    print("Creating comments...")
    comment1 = Project_Comment(user_id=1,project_id=1,comment_text="This is me commenting on my own project - how vain!")

    db.session.add(comment1)
    db.session.commit()

    print("Seeding complete!")
