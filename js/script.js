/**
 * IIFE (Immediately Invoked Function Expression) para criar um escopo privado,
 * protegendo o escopo global e usando o "use strict" de forma segura.
 */
(function () {
    "use-strict";

    // =========================================================================
    // CONFIGURAÇÃO CENTRALIZADA
    // =========================================================================

    const CONFIG = {
        // Datas para contagem (Mês é 0-indexado: 0 = Jan, 11 = Dez)
        DATES: {
            laura: { month: 5, day: 12 },  // 12 de Junho
            gessiel: { month: 5, day: 27 }, // 27 de Junho
            casal: { month: 10, day: 5 }   // 05 de Novembro
        },

        // ATUALIZADO: Músicas da semana
        MUSIC: [
            { title: "Disfruto", artist: "Carla Morrison" },
            { title: "Last First Kiss", artist: "Abe Parker" }
        ],

        // ATUALIZADO: 7 fotos com os seus links e descrições coerentes.
        STATIC_PHOTOS: [
            // Domingo (Índice 0)
            {
                url: 'https://apod.nasa.gov/apod/image/1812/CarinaNebulaGerminiani.jpg',
                title: 'Nebulosa de Carina: O Berçário Cósmico',
                desc: 'Uma das maiores maternidades de estrelas da nossa galáxia. Cada ponto de luz é uma estrela recém-nascida ou um pilar de poeira onde novas estrelas estão se formando.',
                alt: 'Uma foto em cores vibrantes da Nebulosa de Carina, mostrando gases rosa e azuis.'
            },
            // Segunda (Índice 1)
            {
                url: 'https://t2.tudocdn.net/644161',
                title: 'Os Pilares da Criação',
                desc: 'Capturados pelo James Webb, estas são colunas gigantes de gás e poeira onde mundos e estrelas estão literalmente nascendo neste exato momento.',
                alt: 'Três colunas gigantes de gás e poeira marrom-alaranjada, com estrelas vermelhas nas pontas.'
            },
            // Terça (Índice 2)
            {
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg/960px-Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg',
                title: 'Nebulosa de Órion: A Vizinhança das Estrelas',
                desc: 'O berçário de estrelas mais próximo de nós. É tão brilhante que pode ser visto a olho nu, uma prova da beleza caótica e constante da criação no universo.',
                alt: 'Uma visão detalhada de nuvens de gás e poeira em tons de roxo, laranja e azul.'
            },
            // Quarta (Índice 3)
            {
                url: 'https://spacetoday.com.br/wp-content/uploads/2014/03/SQ-HST-Subaru-L.jpg',
                title: 'Quinteto de Stephan: A Dança das Galáxias',
                desc: 'Cinco galáxias em uma complexa dança cósmica. Quatro delas estão tão próximas que um dia irão se fundir, criando uma nova e gigantesca galáxia.',
                alt: 'Cinco galáxias próximas umas das outras.'
            },
            // Quinta (Índice 4)
            {
                url: 'https://olhardigital.com.br/wp-content/uploads/2024/09/unnamed-17.png',
                title: 'Galáxia de Andrômeda - M31',
                desc: 'A galáxia mais próxima da nossa. Mesmo a 2,5 milhões de anos-luz, ela e a Via Láctea estão se movendo uma em direção à outra, destinadas a um encontro cósmico.',
                alt: 'A galáxia espiral de Andrômeda, mostrando seu núcleo brilhante.'
            },
            // Sexta (Índice 5)
            {
                url: 'https://img.odcdn.com.br/wp-content/uploads/2023/08/galaxia-M51.jpg',
                title: 'Galáxia do Redemoinho - M51',
                desc: 'Uma das galáxias mais fotogênicas, famosa por seus braços espirais perfeitos. É como olhar para um redemoinho cósmico, repleto de poeira e novas estrelas.',
                alt: 'Uma galáxia espiral com braços vermelhos e laranjas brilhantes.'
            },
            // Sábado (Índice 6)
            {
                url: 'https://tse2.mm.bing.net/th/id/OIP.pw-4AKODTy6zYS6sZ77OxwAAAA',
                title: 'Nebulosa do Anel - M57',
                desc: 'O belo fantasma de uma estrela que chegou ao fim. O que vemos é o gás brilhante que ela liberou, formando um anel perfeito no espaço.',
                alt: 'Uma nebulosa colorida em forma de anel ou rosquinha com uma estrela anã branca no centro.'
            }
        ],

        // Lista de eventos futuros para a Previsão Astronômica
        FORECAST_EVENTS: [
            {
                endDate: '2025-11-18',
                title: 'Pico: Chuva de Meteoros Leônidas',
                desc: 'Pico em 17-18 de Nov. Visível em todo o Brasil de madrugada.'
            },
            {
                endDate: '2025-12-15',
                title: 'Pico: Chuva de Meteoros Geminídeas',
                desc: 'Pico em 14-15 de Dez. Uma das melhores chuvas do ano.'
            },
            {
                endDate: '2025-12-23',
                title: 'Pico: Chuva de Meteoros Úrsidas',
                desc: 'Pico em 22-23 de Dez. Melhor visível próximo ao amanhecer.'
            },
            {
                endDate: '2026-01-05',
                title: 'Pico: Chuva de Meteoros Quadrântidas',
                desc: 'Pico em 3-4 de Jan. Visível de madrugada.'
            }
        ],

        CITIES: [
            { name: 'Belo Horizonte', prefix: 'bh' },
            { name: 'Bambuí', prefix: 'bambui' }
        ],
        QUOTES: [
            // Domingo 
            { quote: "O amor não se vê com os olhos, mas com o coração.", author: "William Shakespeare" },

            // Segunda 
            { quote: "Diante da vastidão do tempo e da imensidão do universo, é um imenso prazer para mim dividir um planeta e uma época com você.", author: "Carl Sagan" },

            // Terça 
            { quote: "As coisas mais belas do mundo não podem ser vistas nem tocadas. Elas são sentidas com o coração.", author: "Antoine de Saint-Exupéry" },

            // Quarta 
            { quote: "Que a gente saiba ser sol, mesmo quando a vida está nublada.", author: "Autor Desconhecido" },

            // Quinta 
            { quote: "Para estar junto não é preciso estar perto, e sim do lado de dentro.", author: "Autor Desconhecido" },

            // Sexta 
            { quote: "Há pessoas que entram na nossa vida e mudam o nosso mundo para sempre.", author: "Autor Desconhecido" },

            // Sábado 
            { quote: "Somos feitos de poeira de estrelas.", author: "Carl Sagan" }
        ],
        TRANSLATIONS: {
            "New Moon": "Lua Nova", "Waxing Crescent": "Lua Crescente", "First Quarter": "Quarto Crescente",
            "Waxing Gibbous": "Gibosa Crescente", "Full Moon": "Lua Cheia", "Waning Gibbous": "Gibosa Minguante",
            "Last Quarter": "Quarto Minguante", "Waning Crescent": "Lua Minguante"
        }
    };

    // =========================================================================
    // CACHE DE ELEMENTOS DO DOM
    // =========================================================================

    const ELEMENTS = {
        themeToggle: document.getElementById('theme-toggle'),
        countdowns: {
            laura: document.getElementById('aniv-laura'),
            gessiel: document.getElementById('aniv-gessiel'),
            casal: document.getElementById('aniv-casal')
        },
        quote: {
            title: document.getElementById('quote-title'),
            text: document.getElementById('quote-text'),
            author: document.getElementById('quote-author')
        },
        music: [
            {
                art: document.getElementById('music-art-1'),
                title: document.getElementById('music-title-1'),
                artist: document.getElementById('music-artist-1')
            },
            {
                art: document.getElementById('music-art-2'),
                title: document.getElementById('music-title-2'),
                artist: document.getElementById('music-artist-2')
            }
        ],
        apod: {
            img: document.getElementById('apod-img'),
            title: document.getElementById('apod-title'),
            desc: document.getElementById('apod-desc'),
            source: document.getElementById('apod-source')
        },
        forecast: [
            {
                title: document.getElementById('astro-event-1-title'),
                desc: document.getElementById('astro-event-1-desc')
            },
            {
                title: document.getElementById('astro-event-2-title'),
                desc: document.getElementById('astro-event-2-desc')
            }
        ],
        weather: {
            bh: {
                desc: document.getElementById('weather-bh-desc'),
                temp: document.getElementById('weather-bh-temp'),
                icon: document.getElementById('weather-bh-icon'),
                sunrise: document.getElementById('sunrise-bh'),
                sunset: document.getElementById('sunset-bh'),
                moon: document.getElementById('moon-phase-bh')
            },
            bambui: {
                desc: document.getElementById('weather-bambui-desc'),
                temp: document.getElementById('weather-bambui-temp'),
                icon: document.getElementById('weather-bambui-icon'),
                sunrise: document.getElementById('sunrise-bambui'),
                sunset: document.getElementById('sunset-bambui'),
                moon: document.getElementById('moon-phase-bambui')
            }
        }
    };

    /**
     * CORRIGIDO: Fallbacks apenas para as APIs que ainda usamos.
     */
    const FALLBACKS = {
        MUSIC_ART: 'https://th.bing.com/th/id/OIP.a-f11vHnb_J2HeG2p_I-ogHaHa',
        WEATHER: '--'
    };

    // =========================================================================
    // HELPERS DE UI E UTILITÁRIOS
    // =========================================================================

    const ui = {
        updateText: (el, text) => { if (el) el.textContent = text; },
        updateHTML: (el, html) => { if (el) el.innerHTML = html; },
        updateImage: (el, src, alt) => {
            if (el) {
                el.src = src;
                el.alt = alt;
            }
        }
    };

    const getWeatherIcon = (code) => {
        if (code === 113) return 'sunny';
        if (code === 116) return 'partly_cloudy_day';
        if ([119, 122].includes(code)) return 'cloud';
        if ([143, 248, 260].includes(code)) return 'foggy';
        if ([176, 263, 266, 293, 296, 299, 302, 305, 308, 353, 356, 359].includes(code)) return 'rainy';
        if ([179, 227, 323, 326, 329, 332, 335, 338, 368, 371].includes(code)) return 'weather_snowy';
        if ([200, 386, 389].includes(code)) return 'thunderstorm';
        return 'cloud';
    };

    const formatTime = (time) => time.replace(" AM", "").replace(" PM", "").padStart(5, '0');

    // =========================================================================
    // LÓGICA DO DASHBOARD (SÍNCRONA)
    // =========================================================================

    const calculateDaysRemaining = (targetDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const currentYear = today.getFullYear();
        let eventDate = new Date(currentYear, targetDate.month, targetDate.day);
        if (eventDate < today) {
            eventDate.setFullYear(currentYear + 1);
        }
        const diffTime = eventDate.getTime() - today.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    const updateCountdowns = () => {
        ui.updateText(ELEMENTS.countdowns.laura, calculateDaysRemaining(CONFIG.DATES.laura));
        ui.updateText(ELEMENTS.countdowns.gessiel, calculateDaysRemaining(CONFIG.DATES.gessiel));
        ui.updateText(ELEMENTS.countdowns.casal, calculateDaysRemaining(CONFIG.DATES.casal));
    };

    const updateWeeklyQuote = () => {
        const dayIndex = new Date().getDay(); // 0-6
        const quote = CONFIG.QUOTES[dayIndex];
        ui.updateText(ELEMENTS.quote.title, "Frase do Dia");
        ui.updateText(ELEMENTS.quote.text, `“${quote.quote}”`);
        ui.updateText(ELEMENTS.quote.author, `- ${quote.author}`);
    };

    const updateAstroForecast = () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const upcomingEvents = CONFIG.FORECAST_EVENTS.filter(event => {
            const eventDate = new Date(event.endDate + 'T23:59:59');
            return eventDate >= today;
        });

        if (upcomingEvents.length > 0) {
            ui.updateText(ELEMENTS.forecast[0].title, upcomingEvents[0].title);
            ui.updateText(ELEMENTS.forecast[0].desc, upcomingEvents[0].desc);
        } else {
            ui.updateText(ELEMENTS.forecast[0].title, "Nenhum evento próximo");
            ui.updateText(ELEMENTS.forecast[0].desc, "Verifique mais tarde.");
        }

        if (upcomingEvents.length > 1) {
            ui.updateText(ELEMENTS.forecast[1].title, upcomingEvents[1].title);
            ui.updateText(ELEMENTS.forecast[1].desc, upcomingEvents[1].desc);
        } else {
            ui.updateText(ELEMENTS.forecast[1].title, "");
            ui.updateText(ELEMENTS.forecast[1].desc, "");
        }
    };

    const updateStaticPhoto = () => {
        const dayIndex = new Date().getDay(); // 0-6
        const photo = CONFIG.STATIC_PHOTOS[dayIndex];
        ui.updateImage(ELEMENTS.apod.img, photo.url, photo.alt);
        ui.updateText(ELEMENTS.apod.title, photo.title);
        ui.updateText(ELEMENTS.apod.desc, photo.desc);
        ui.updateText(ELEMENTS.apod.source, 'Foto do dia');
    };

    // =========================================================================
    // LÓGICA DE API (ASSÍNCRONA)
    // =========================================================================

    const fetchiTunesArtwork = async (song, elementGroup) => {
        const searchTerm = `${song.title} ${song.artist}`;
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=song&limit=1`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Falha na rede do iTunes');
            const data = await response.json();
            let artworkUrl = FALLBACKS.MUSIC_ART;
            if (data.resultCount > 0 && data.results[0].artworkUrl100) {
                artworkUrl = data.results[0].artworkUrl100.replace('100x100', '200x200');
            }
            ui.updateImage(elementGroup.art, artworkUrl, `${song.title} - ${song.artist}`);
            ui.updateText(elementGroup.title, song.title);
            ui.updateText(elementGroup.artist, song.artist);
        } catch (error) {
            console.error(`Erro ao buscar música (${song.title}):`, error);
            ui.updateImage(elementGroup.art, FALLBACKS.MUSIC_ART, "Falha ao carregar");
            ui.updateText(elementGroup.title, song.title);
            ui.updateText(elementGroup.artist, song.artist);
        }
    };

    const fetchWeather = async (city, elementGroup) => {
        try {
            const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
            if (!response.ok) throw new Error(`Falha ao buscar clima de ${city}`);
            const data = await response.json();
            const current = data.current_condition[0];
            const astronomy = data.weather[0].astronomy[0];
            ui.updateText(elementGroup.desc, current.lang_pt[0].value);
            ui.updateText(elementGroup.temp, `${current.temp_C}°`);
            ui.updateText(elementGroup.icon, getWeatherIcon(parseInt(current.weatherCode, 10)));
            ui.updateText(elementGroup.sunrise, formatTime(astronomy.sunrise));
            ui.updateText(elementGroup.sunset, formatTime(astronomy.sunset));
            ui.updateText(elementGroup.moon, CONFIG.TRANSLATIONS[astronomy.moon_phase] || astronomy.moon_phase);
        } catch (error) {
            console.error(`Erro no Clima (${city}):`, error);
            ui.updateText(elementGroup.desc, 'Indisponível');
            ui.updateText(elementGroup.temp, FALLBACKS.WEATHER);
            ui.updateText(elementGroup.icon, 'cloud_off');
        }
    };

    // =========================================================================
    // INICIALIZAÇÃO E TEMA
    // =========================================================================

    const initializeTheme = () => {
        if (!ELEMENTS.themeToggle) return;
        const applyTheme = (theme) => {
            if (theme === "dark-theme") document.body.classList.add("dark-theme");
            else document.body.classList.remove("dark-theme");
        };
        const savedTheme = localStorage.getItem("theme") || "light-theme";
        applyTheme(savedTheme);
        ELEMENTS.themeToggle.addEventListener("click", () => {
            const isDarkMode = document.body.classList.contains("dark-theme");
            const newTheme = isDarkMode ? "light-theme" : "dark-theme";
            applyTheme(newTheme);
            localStorage.setItem("theme", newTheme);
        });
    };

    /**
     * Função principal de inicialização.
     */
    const init = () => {
        initializeTheme();

        // Tarefas síncronas (executam imediatamente)
        updateCountdowns();
        updateWeeklyQuote();
        updateAstroForecast();
        updateStaticPhoto(); // Carrega a foto estática

        // Tarefas assíncronas (buscam dados externos)
        fetchiTunesArtwork(CONFIG.MUSIC[0], ELEMENTS.music[0]);
        fetchiTunesArtwork(CONFIG.MUSIC[1], ELEMENTS.music[1]);
        fetchWeather(CONFIG.CITIES[0].name, ELEMENTS.weather.bh);
        fetchWeather(CONFIG.CITIES[1].name, ELEMENTS.weather.bambui);
    };

    document.addEventListener('DOMContentLoaded', init);

})();