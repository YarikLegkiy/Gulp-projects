var currentSkin = getCurrentSkin();
var stories = new Zuck('stories', {
    backNative: true,
    previousTap: true,
    skin: currentSkin['name'],
    autoFullScreen: currentSkin['params']['autoFullScreen'],
    avatars: currentSkin['params']['avatars'],
    paginationArrows: currentSkin['params']['paginationArrows'],
    list: currentSkin['params']['list'],
    cubeEffect: currentSkin['params']['cubeEffect'],
    localStorage: true,
    stories: [
        Zuck.buildTimelineItem(
            "0",
            "https://lestatus.ru/wp-content/uploads/%D0%A1%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B0%D0%B2%D0%B8%D1%8F.jpg",
            "Відпочинок на природі",
            "",
            timestamp(),
            [
                ["ramon-1", "photo", 3, "assets/images/work/work-1.jpg", "assets/images/stories/stories-1.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/work/work-2.jpg", "assets/images/stories/stories-1.jpg", '', false, false, timestamp()]
            ]
        ),
        Zuck.buildTimelineItem(
            "1",
            "https://lestatus.ru/wp-content/uploads/%D0%A1%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B0%D0%B2%D0%B8%D1%8F.jpg",
            "Закінчую складний проект",
            "",
            timestamp(),
            [
                ["ramon-1", "photo", 3, "assets/images/work/work-1.jpg", "assets/images/stories/stories-2.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/work/work-2.jpg", "assets/images/stories/stories-2.jpg", '', false, false, timestamp()]
            ]
        ),
        Zuck.buildTimelineItem(
            "2",
            "https://lestatus.ru/wp-content/uploads/%D0%A1%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B0%D0%B2%D0%B8%D1%8F.jpg",
            "Переїхав у нову квартиру",
            "",
            timestamp(),
            [
                ["ramon-1", "photo", 3, "assets/images/work/work-1.jpg", "assets/images/stories/stories-3.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/work/work-2.jpg", "assets/images/stories/stories-3.jpg", '', false, false, timestamp()]
            ]
        ),
        Zuck.buildTimelineItem(
            "3",
            "https://lestatus.ru/wp-content/uploads/%D0%A1%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B0%D0%B2%D0%B8%D1%8F.jpg",
            "Осінь прийшла",
            "",
            timestamp(),
            [
                ["ramon-1", "photo", 3, "assets/images/work/work-1.jpg", "assets/images/stories/stories-4.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/work/work-2.jpg", "assets/images/stories/stories-4.jpg", '', false, false, timestamp()]
            ]
        )
    ]
});