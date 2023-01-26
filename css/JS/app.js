const music = new Audio('/audio/1.mp3');

const songs = [
    {
        id: '1',
        songName: `Glimpse of us <br>
        <div class="singer">Joji</div>`,
        poster: "/img/1.jpg"
    },
    {
        id: '2',
        songName: `Faded <br>
        <div class="singer">Alan Walker</div>`,
        poster: "/img/2.jpg"
    },
    {
        id: '3',
        songName: `Call of silence <br>
        <div class="singer">Hiroyuki Sawano</div>`,
        poster: "/img/3.jpg"
    },
    {
        id: "4",
        songName: `Khairiyat <br>
        <div class="singer">Arijit Singh</div>`,
        poster: "/img/4.jpg"
    },
    {
        id: "5",
        songName: `Eyewater <br>
        <div class="singer"> Hiroyuki Sawano</div>`,
        poster: "/img/5.jpg"
    },
    {
        id: "6",
        songName: `Mockingbird <br>
        <div class="singer">Eminem</div>`,
        poster: "/img/6.jpg"
    },
    {
        id: "7",
        songName: `Agar tum sath ho <br>
        <div class="singer">Tamasha</div>`,
        poster: "/img/7.jpg"
    },
    {
        id: "8",
        songName: `Dream on <br>
        <div class="singer">Auerosmith</div>`,
        poster: "/img/8.jpg"
    },
    {
        id: "9",
        songName: `Dilber <br>
        <div class="singer">Satyameva jayeta</div>`,
        poster: "/img/9.jpg"
    },
    {
        id: "10",
        songName: `Duniya <br>
        <div class="singer">Lukka Chippi</div>`,
        poster: "/img/10.jpg"
    },
    {
        id: "11",
        songName: `Arcade <br>
        <div class="singer">Duncan Laurence
        </div>`,
        poster: "/img/11.jpg"
    },
    {
        id: "12",
        songName: `Standing by you<br>
        <div class="singer">Nish</div>`,
        poster: "/img/12.jpg"
    },
    {
        id: "13",
        songName: `On to grandline <br>
        <div class="singer">Kohei Tanaka</div>`,
        poster: "/img/13.jpg"
    },
    {
        id: "14",
        songName: `Vaste <br>
        <div class="singer">Divya Bhanushali</div>`,
        poster: "/img/14.jpg"
    },
    {
        id: "15",
        songName: `Lut Gaye <br>
        <div class="singer">Jubin Nautiyal</div>`,
        poster: "/img/15.jpg"
    },
    {
        id: "16",
        songName: `Jugnu <br>
        <div class="singer">Badshah</div>`,
        poster: "/img/16.jpg"
    },
    {
        id: "17",
        songName: `Experience <br>
        <div class="singer">Daniel Hope</div>`,
        poster: "/img/17.jpg"
    },
    {
        id: "18",
        songName: `Passori <br>
        <div class="singer">Ali Sethi</div>`,
        poster: "/img/18.jpg"
    },
    {
        id: "19",
        songName: `Fairytale <br>
        <div class="singer">Alexander Rybak</div>`,
        poster: "/img/19.jpg"
    },
    {
        id: "20",
        songName: `Despascito <br>
        <div class="singer">Luis Fonsi</div>`,
        poster: "/img/20.jpg"
    },
]


Array.from(document.getElementsByClassName('songitem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});



let search_results = document.getElementsByClassName('search_results')[0];
songs.forEach(element => {
    const { id, songName, poster } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;

    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }

    }
})


let masterPlay = document.getElementById('masterplay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 300;
})
pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 300;
})

let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let item = document.getElementsByClassName('item')[0];

pop_artist_left.addEventListener('click', () => {
    item.scrollLeft -= 300;
})
pop_artist_right.addEventListener('click', () => {
    item.scrollLeft += 300;
})

let index = 0;
let download_music = document.getElementById('download_music');
let poster_playbar = document.getElementById('poster_playbar');

let g = document.getElementById('titelplay');
g.addEventListener('click', () => {
    index = 4;
    music.src = `/audio/4.mp3`;
    poster_playbar.src = `/img/4.jpg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `/audio/4.mp3`

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });
})


Array.from(document.getElementsByClassName('playbtn')).forEach((e) => {
    e.addEventListener('click', (el) => {
        let index = el.target.id;
        music.src = `/audio/${index}.mp3`;
        poster_playbar.src = `/img/${index}.jpg`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `/audio/${index}.mp3`

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });
    });

    let currentStart = document.getElementById('start');
    let currentEnd = document.getElementById('end');
    let seek = document.getElementById('seek');
    let bar2 = document.getElementById('bar2');
    let dot = document.getElementById('dot');

    music.addEventListener('timeupdate', () => {
        let music_curr = music.currentTime;
        let music_dur = music.duration;

        let min1 = Math.floor(music_dur / 60);
        let sec1 = Math.floor(music_dur % 60);

        // console.log(min1);
        // console.log(sec1);

        if (sec1 < 10) {
            sec1 = `0${sec1}`;
        }
        currentEnd.innerText = `${min1}:${sec1}`;

        let min2 = Math.floor(music_curr / 60);
        let sec2 = Math.floor(music_curr % 60);

        if (sec2 < 10) {
            sec2 = `0${sec2}`;
        }

        currentStart.innerHTML = `${min2}:${sec2}`;

        let progressBar = parseInt((music_curr / music_dur) * 100);
        seek.value = progressBar;
        // console.log(seek.value);

        let seekbar = seek.value;
        bar2.style.width = `${seekbar}%`;
        dot.style.left = `${seekbar}%`;



    });

    seek.addEventListener('change', () => {
        music.currentTime = seek.value * music.duration / 100;
    });

    let vol_icon = document.getElementById('vol_icon');
    let vol = document.getElementById('vol');
    let vol_bar = document.getElementsByClassName('vol_bar')[0];
    let vol_dot = document.getElementById('vol_dot');

    vol.addEventListener('change', () => {
        if (vol.value == 0) {
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.add('bi-volume-off-fill');
        }
        if (vol.value > 0) {
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }
        if (vol.value > 50) {
            vol_icon.classList.add('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }

        let vol_a = vol.value;
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;
        music.volume = vol_a / 100;


    });


});



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songitem')).length;
        // console.log(index);
    }

    music.src = `/audio/${index}.mp3`;
    poster_playbar.src = `/img/${index}.jpg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
});

next.addEventListener('click', () => {
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songitem')).length) {
        index = 1;
        // console.log(index);
    }

    music.src = `/audio/${index}.mp3`;
    poster_playbar.src = `/img/${index}.jpg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });
});

let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;

    }
});



const next_music = () => {
    if (index == songs.length) {
        index = 1
    }
    else {
        index++;
    }
    // index++;
    music.src = `/audio/${index}.mp3`;
    poster_playbar.src = `/img/${index}.jpg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `/audio/${index}.mp3`

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });
};

const repeat_music = () => {
    index;
    music.src = `/audio/${index}.mp3`;
    poster_playbar.src = `/img/${index}.jpg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `/audio/${index}.mp3`

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });
};


const random_music = () => {
    if (index == songs.length) {
        index = 1
        console.log(index);
    }
    else {
        index = Math.floor((Math.random() * songs.length) + 1);
        console.log((Math.random() * songs.length) + 1);
    }

    music.src = `/audio/${index}.mp3`;
    poster_playbar.src = `/img/${index}.jpg`;
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `/audio/${index}.mp3`

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });
};


music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;
    console.log(b);

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
});
