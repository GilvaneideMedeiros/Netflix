export const categories = [
    {
        title: "Épicos",
        items: [
            {
                img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg", top10: true, badge: "Clássico", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg"
            },
            {
                img: "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
            },
            {
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
            },
            {
                img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
            },
            {
                img: "https://img.youtube.com/vi/IeH4ZM0x85I/0.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=IeH4ZM0x85I&t=30s"
            },
            {
                img: "https://img.youtube.com/vi/aqz-KE-bpKQ/0.jpg", top10: true, badge: "Open Movie", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=aqz-KE-bpKQ"
            },
            {
                img: "https://img.youtube.com/vi/eRsGyueVLvQ/0.jpg", top10: true, badge: "Open Movie", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=eRsGyueVLvQ"
            },
            {
                img: "https://img.youtube.com/vi/R6MlUcmOul8/0.jpg", top10: true, badge: "Open Movie", badgeColor: "red", progress: 0,
                youtube: "https://www.youtube.com/watch?v=R6MlUcmOul8"
            }
        ]
    },
    {
        title: "Séries",
        items: [
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
        ]
    },
    {
        title: "Para maratonar",
        items: [
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
            { img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k" },
        ]
    }
];

function cloneCategories() {
    return JSON.parse(JSON.stringify(categories));
}

function buildProfileCatalog(profileTitles) {
    const profileCategories = cloneCategories();
    profileCategories[0].title = profileTitles[0];
    profileCategories[1].title = profileTitles[1];
    profileCategories[2].title = profileTitles[2];
    return profileCategories;
}

export const categoriesByProfile = {
    Uander: categories,
    Gilvaneide: buildProfileCatalog(['Romance e emocao', 'Series em alta', 'Para relaxar']),
    David: buildProfileCatalog(['Classicos e drama', 'Series para rever', 'Sessao da noite']),
    Jaqueline: buildProfileCatalog(['Inspiradores', 'Series para curtir', 'Para maratonar no fim de semana']),
    Rafael: buildProfileCatalog(['Aventura total', 'Series favoritas', 'Para assistir depois'])
};
