<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Old School Rap - Стиль навсегда</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
        body {
            margin: 0;
            font-family: 'Russo One', sans-serif;
            background: linear-gradient(to right, #0f0f0f, #1f1f1f);
            color: #fff;
            overflow-x: hidden;
        }
        header {
            background: #111;
            padding: 60px 20px;
            text-align: center;
            animation: fadeIn 2s ease;
        }
        header h1 {
            font-size: 48px;
            color: #facc15;
            margin: 0;
        }
        nav {
            background: #222;
            padding: 15px;
            text-align: center;
        }
        nav a {
            color: #facc15;
            margin: 0 20px;
            text-decoration: none;
            font-size: 18px;
            transition: 0.3s;
        }
        nav a:hover {
            color: #fff;
        }
        main {
            padding: 40px 20px;
            max-width: 1000px;
            margin: auto;
            animation: slideUp 1s ease;
        }
        section {
            margin-bottom: 60px;
        }
        section h2 {
            font-size: 32px;
            color: #facc15;
        }
        p {
            font-size: 18px;
            line-height: 1.6;
        }
        img {
            max-width: 100%;
            border-radius: 15px;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
            margin-top: 20px;
        }
        footer {
            background: #111;
            text-align: center;
            padding: 30px;
            font-size: 16px;
            color: #999;
            animation: fadeIn 2s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    </style>
</head>
<body>
    <header>
        <h1>Old School Rap: Корни хип-хопа</h1>
    </header>
    <nav>
        <a href="#about">О жанре</a>
        <a href="#icons">Легенды</a>
        <a href="#vibe">Атмосфера</a>
    </nav>
    <main>
        <section id="about">
            <h2>Что такое олд скул рэп?</h2>
            <p>Old school rap — это золотая эра хип-хопа. Это ритмы улиц Нью-Йорка 80-90-х годов, когда всё только начиналось. Уличные баттлы, бумбоксы, винилы и искренний стиль. Рэп был не просто музыкой, а голосом улиц, способом выразить протест, боль и мечты простых людей.</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Boombox_ghettoblaster.jpg" alt="Бумбокс - символ эры">
        </section>
        <section id="icons">
            <h2>Легенды жанра</h2>
            <p>Невозможно говорить об олд скуле без таких имён как 2Pac, Notorious B.I.G., Run-D.M.C., Public Enemy и N.W.A. Эти артисты не просто читали тексты — они рассказывали истории, которые трогали сердца и будоражили умы. Их строки до сих пор цитируют и уважают по всему миру.</p>
            <img src="https://upload.wikimedia.org/wikipedia/en/1/13/2Pac_All_Eyez_on_Me.jpg" alt="2Pac - легенда рэпа">
        </section>
        <section id="vibe">
            <h2>Атмосфера и стиль</h2>
            <p>Old school — это не только музыка, но и стиль: широкие штаны, бейсболки, кроссовки, граффити и танцы на улицах. Это эпоха, когда рэп был чистым, честным и уличным. Каждый трек — как манифест. Атмосфера олд скула — это энергия свободы и настоящего духа времени.</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Hip_hop_dance_show.jpg" alt="Хип-хоп культура на улицах">
        </section>
    </main>

  <footer>
        <p>Автор: Alesha Wmetanka © 2025</p>
    </footer>
</body>
</html>
