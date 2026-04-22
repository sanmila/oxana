/**
 * OXANA BLOG — Article Index
 * ─────────────────────────────────────────────────────────────
 * To add a new article each week:
 *   1. Add a new object at the TOP of the array below (newest first).
 *   2. Drop the cover image as articles/images/NN.webp  (e.g. 05.webp).
 *      → If no image exists, a styled gradient card will show instead.
 *   3. That's it. The blog page renders automatically.
 *
 * Fields:
 *   id        — unique sequential number string  "05"
 *   date      — ISO date shown on the card        "2026-04-28"
 *   tag       — { ru, en }  category label
 *   title     — { ru, en }
 *   excerpt   — { ru, en }  1–2 sentence intro
 *   points    — array of { ru, en } bullet strings (bold **text** supported)
 *   image     — filename inside articles/images/  (e.g. "05.webp") or null
 *   accent    — CSS gradient for the card header when no image (pick any)
 *               Options: "gold" | "sage" | "rose" | "slate" | "indigo"
 * ─────────────────────────────────────────────────────────────
 */

const ARTICLES = [

  {
    id: "04",
    date: "2026-04-14",
    tag: { ru: "О терапии", en: "About Therapy" },
    title: {
      ru: "Как устроена терапия: что происходит на сессиях",
      en: "How Therapy Works: What Happens in Sessions"
    },
    excerpt: {
      ru: "«А что мы вообще будем делать?» — Разбираю свою внутреннюю кухню на реальном примере.",
      en: "\"So what exactly will we do?\" — I break down my method using a real client case."
    },
    points: [
      {
        ru: "**1. Мысли.** Разделяем факты и интерпретации. «Муж сел в телефон» — факт. «Ему на меня наплевать» — установка. Затем через ДПДГ или когнитивное разделение закрепляем новую, здоровую установку.",
        en: "**1. Thoughts.** Facts vs. interpretations. \"Husband on his phone\" — fact. \"He doesn't care\" — belief. We replace the belief using EMDR or cognitive defusion."
      },
      {
        ru: "**2. Чувства.** Называем злость, обиду, стыд. Оцениваем по шкале 0–10. Ищем нарушенные потребности и их корни в прошлом опыте — часто через технику «Кинофильм».",
        en: "**2. Feelings.** We name anger, hurt, shame and rate intensity 0–10. We find violated needs and trace their roots in the past using the \"Film\" technique."
      },
      {
        ru: "**3. Тело.** Находим, где живёт эмоция: в груди, животе, горле. Работаем с ДПДГ, дыханием, заземлением, ТЭС или психокатализом. Злость на 9 баллов снижается до 3–4.",
        en: "**3. Body.** We locate the emotion — chest, stomach, throat. We use EMDR, breathing, grounding, EFT, or psychocatalysis. Anger at 9 drops to 3–4."
      },
      {
        ru: "**4. Сценарии.** Смотрим на поведение: помогает ли оно в долгосрочной перспективе? Разбираем треугольник Карпмана — кто говорит: Внутренний ребёнок, Родитель или Взрослый?",
        en: "**4. Patterns.** Does the behaviour help long-term? We examine the Karpman triangle — who is speaking: the Inner Child, Parent, or Adult?"
      },
      {
        ru: "**5. Действия.** Переносим внутреннюю работу наружу. Репетируем ассертивную фразу: «Мне важно, чтобы мы готовили ужин вместе. Ты можешь отложить телефон на 30 минут?» — вместо крика или молчания.",
        en: "**5. Actions.** We take the inner work into real life. We rehearse an assertive request: \"I need us to cook dinner together. Can you put your phone down for 30 minutes?\" — instead of shouting or silence."
      }
    ],
    image: "04.webp",
    accent: "gold"
  },

  {
    id: "03",
    date: "2026-04-07",
    tag: { ru: "Самопознание", en: "Self-Awareness" },
    title: {
      ru: "Тихая агрессия: как мы наказываем себя, не замечая этого",
      en: "Silent Aggression: How We Punish Ourselves Without Noticing"
    },
    excerpt: {
      ru: "Самонаказание не всегда выглядит как самонаказание. Иногда это просто «обычные привычки».",
      en: "Self-punishment doesn't always look like self-punishment. Sometimes it's just \"normal habits.\""
    },
    points: [
      {
        ru: "**Прокрастинация.** Откладывание — не лень, а форма саботажа. Психика защищается от дискомфорта перемен.",
        en: "**Procrastination.** Not laziness — a form of sabotage. The psyche protects itself from the discomfort of change."
      },
      {
        ru: "**Отказ от отдыха.** Убеждение «я не заслуживаю» — родом из детства, не из реальности.",
        en: "**Refusing rest.** \"I don't deserve it\" is a childhood belief, not reality."
      },
      {
        ru: "**Чрезмерная занятость.** Не оставляем себе времени на себя — это тоже форма самонаказания.",
        en: "**Chronic busyness.** Leaving no time for yourself is also a form of self-punishment."
      },
      {
        ru: "**Самообесценивание.** Постоянные «шутки» о себе — способ наказывать себя социально приемлемо.",
        en: "**Self-deprecation.** Constant jokes at your own expense are a socially acceptable way to punish yourself."
      },
      {
        ru: "**Страх успеха.** Мы срываем планы, чтобы подтвердить: «у меня ничего не получается». Страх ответственности реальнее страха неудачи.",
        en: "**Fear of success.** We sabotage plans to confirm \"I can't do it.\" Fear of responsibility is often greater than fear of failure."
      },
      {
        ru: "**Вина за радость.** Ощущение, что счастье нужно заслужить — мешает принимать хорошее в жизни.",
        en: "**Guilt over joy.** Feeling that happiness must be earned — blocks you from accepting good things."
      },
      {
        ru: "**Страх наказания.** Ожидание негативных последствий становится самосбывающимся пророчеством — мы неосознанно провоцируем то, чего боимся.",
        en: "**Fear of punishment.** Expecting negative consequences becomes self-fulfilling — we unconsciously provoke what we fear."
      },
      {
        ru: "**Внутренний критик.** Обесценивает достижения, фокусируется на ошибках, сравнивает с недостижимым идеалом. Его можно перенастроить.",
        en: "**Inner critic.** Dismisses achievements, focuses on mistakes, compares you to an impossible ideal. It can be retrained."
      }
    ],
    image: "03.webp",
    accent: "sage"
  },

  {
    id: "02",
    date: "2026-03-31",
    tag: { ru: "Отношения", en: "Relationships" },
    title: {
      ru: "И жили они долго и счастливо… Но как именно?",
      en: "And They Lived Happily Ever After… But How?"
    },
    excerpt: {
      ru: "Большинство пар расстаются на 3-м этапе из шести — считая, что любовь прошла. Но впереди ещё три, более глубоких.",
      en: "Most couples separate at stage 3 of 6 — thinking love is over. But three deeper stages still lie ahead."
    },
    points: [
      {
        ru: "**Этап 1 — Медовый месяц.** Идеализация и эйфория. Не торопитесь с серьёзными решениями — наблюдайте за партнёром в стрессе и конфликтах.",
        en: "**Stage 1 — Honeymoon.** Idealisation and euphoria. Don't rush into big decisions — observe your partner under stress."
      },
      {
        ru: "**Этап 2 — Реальность.** Иллюзии уходят, проявляется настоящий человек. Обсуждайте различия открыто, без обвинений.",
        en: "**Stage 2 — Reality.** Illusions fade. Discuss differences openly, without blame."
      },
      {
        ru: "**Этап 3 — Кризис.** Активируются старые травмы. Большинство пар расстаются здесь — не зная, что впереди три более глубоких этапа. Именно здесь терапия наиболее эффективна.",
        en: "**Stage 3 — Crisis.** Old wounds surface. Most couples split here — unaware three deeper stages lie ahead. Therapy is most effective at this point."
      },
      {
        ru: "**Этап 4 — Настройка.** Партнёры начинают понимать эмоциональный мир друг друга. Конфликты становятся менее разрушительными.",
        en: "**Stage 4 — Attunement.** Partners start understanding each other's emotional world. Conflicts become less destructive."
      },
      {
        ru: "**Этап 5 — Партнёрство.** Отношения становятся опорой, а не тревогой. Уважение важнее первоначальной страсти.",
        en: "**Stage 5 — Partnership.** The relationship becomes a foundation, not a source of anxiety. Respect matters more than passion."
      },
      {
        ru: "**Этап 6 — Глубокая любовь.** Зрелая привязанность. Вы видели друг друга в самых уязвимых состояниях — и выбрали остаться.",
        en: "**Stage 6 — Deep love.** Mature attachment. You've seen each other at your most vulnerable — and chose to stay."
      }
    ],
    image: "02.webp",
    accent: "rose"
  },

  {
    id: "01",
    date: "2026-03-24",
    tag: { ru: "Мотивация", en: "Motivation" },
    title: {
      ru: "Знаю, как действовать. Но не делаю. Почему?",
      en: "I Know What to Do. But I Don't. Why?"
    },
    excerpt: {
      ru: "«Понимаю, что нужно делать — но не могу начать.» Разбираем 10 причин, которые держат нас в бездействии.",
      en: "\"I know what to do — but can't start.\" We break down 10 reasons that keep us stuck."
    },
    points: [
      {
        ru: "**1. Страх неудачи.** Страх ошибиться бывает сильнее желания успеха. Переосмыслите неудачу — каждая ошибка приближает к цели.",
        en: "**1. Fear of failure.** Fear of mistakes can outweigh desire for success. Reframe failure — every mistake brings you closer."
      },
      {
        ru: "**2. Перфекционизм.** Ждём идеального момента — он не наступит. Начните с несовершенного первого шага.",
        en: "**2. Perfectionism.** The perfect moment won't come. Start with an imperfect first step."
      },
      {
        ru: "**3. Масштаб задачи.** Большая цель парализует. Разбейте на маленькие конкретные шаги и фокусируйтесь на одном.",
        en: "**3. Overwhelming scale.** Big goals paralyse. Break them into small concrete steps and focus on one."
      },
      {
        ru: "**4. Недостаток мотивации.** Свяжите действие с вашими глубинными ценностями — с жизнью, которой вы хотите жить.",
        en: "**4. Lack of motivation.** Connect the action to your core values — to the life you want to live."
      },
      {
        ru: "**5. Прокрастинация как защита.** Откладывание защищает от дискомфорта перемен. Примите: дискомфорт — часть роста.",
        en: "**5. Procrastination as shield.** Delay protects us from discomfort. Accept: discomfort is part of growth."
      },
      {
        ru: "**6. Недостаток энергии.** Физическое или эмоциональное истощение блокирует действие. Сон, питание, движение — фундамент.",
        en: "**6. Low energy.** Physical or emotional exhaustion blocks action. Sleep, food, movement — the foundation."
      },
      {
        ru: "**7. Внутренние конфликты.** Часть нас хочет действовать, другая — сопротивляется. Выпишите «за» и «против» и найдите глубинную потребность за сопротивлением.",
        en: "**7. Inner conflict.** Part of us wants to act, another resists. Write out pros/cons and find the need behind the resistance."
      },
      {
        ru: "**8. Недостаток навыков.** Страх показаться некомпетентным останавливает. Учиться в процессе — это нормально.",
        en: "**8. Skill gap.** Fear of incompetence stops us. Learning on the go is completely normal."
      },
      {
        ru: "**9. Внешние факторы.** Иногда препятствия реальны. Разберитесь: что в вашей власти, а к чему нужно адаптироваться.",
        en: "**9. External obstacles.** Sometimes barriers are real. Clarify: what can you change vs. adapt to."
      },
      {
        ru: "**10. Неверие в результат.** Ищите доказательства, что выбранный путь работает. Общайтесь с теми, кто уже достиг похожих целей.",
        en: "**10. Disbelief in results.** Find evidence the path works. Talk to those who've already reached similar goals."
      }
    ],
    image: "01.webp",
    accent: "slate"
  }

];
