const grid_item = document.getElementsByClassName('grid-item');
const h_primary = document.getElementsByClassName('h-primary')[0];

document.getElementById('semester').addEventListener('change',(e)=>{
    sem = e.target.value
    h_primary.innerHTML = sem
    if(sem == 'Sem-1'){
        render_sem1()
    }
    else if(sem == 'Sem-2'){
        render_sem2()
    }
    else if(sem == 'Sem-3'){
        render_sem3()
    }
    else if(sem == 'Sem-4'){
        render_sem4()
    }
    else if(sem == 'Sem-3'){
        render_sem5()
    }

})

function render_sem1(){
    books ={
        0 : {
            img : 'https://covers.zlibcdn2.com/covers/books/51/c0/c8/51c0c8c54c6348f7c5a2ba348babfc29.jpg' ,
            book_url : 'https://1lib.in/dl/17752589/751b1e',
            book_name : 'Dr. B. S. Grewal, Higher Engineering Mathematics'
        },
        1 : {
            img : 'https://covers.zlibcdn2.com/covers/books/65/83/be/6583be4f05289fcd462ca6b9c9ef94aa.jpg' ,
            book_url : 'https://1lib.in/dl/5439373/0e69bc',
            book_name : 'S. Mani Naidu, A Text Book of Engineering Physics - I'
        },
        2 : {
            img : 'https://covers.zlibcdn2.com/covers/books/88/3f/1a/883f1a1bde70e1554e4d59c38c359a21.jpg' ,
            book_url : 'https://1lib.in/dl/11951361/a2248b',
            book_name : 'Dr. S.S. DARA, BASIC ENGINEERING CHEMISTRY'
        },
        3 : {
            img : 'https://covers.zlibcdn2.com/covers/books/b4/1f/63/b41f6337e2bd7e8eb54b93d633de78ff.jpg' ,
            book_url : 'https://1lib.in/dl/926559/b9192e',
            book_name : 'K. L. Kumar, Engineering Mechanics, 3rd edition'
        },
        4 : {
            img : 'https://m.media-amazon.com/images/I/41pRH86A%2B7L._SX198_BO1,204,203,200_QL40_ML2_.jpg' ,
            book_url : '',
            book_name : 'B. R. Patil, Basic Electrical Engineering',
        },
        5 : {
            img : '' ,
            book_url : '',
            book_name : '',
        }
    }

    for (var i = 0; i < grid_item.length; i++){
        grid_item[i].children[0].href = books[i].book_url;
        grid_item[i].children[0].children[0].src = books[i].img;
        grid_item[i].children[1].innerHTML = books[i].book_name;
    }
}

function render_sem2(){
    books ={
        0 : {
            img : '' ,
            book_url : '',
            book_name : ''
        },
        1 : {
            img : 'https://covers.zlibcdn2.com/covers/books/65/83/be/6583be4f05289fcd462ca6b9c9ef94aa.jpg' ,
            book_url : 'https://1lib.in/dl/5439373/0e69bc',
            book_name : 'S. Mani Naidu, A Text Book of Engineering Physics - I'
        },
        2 : {
            img : 'https://covers.zlibcdn2.com/covers/books/88/3f/1a/883f1a1bde70e1554e4d59c38c359a21.jpg' ,
            book_url : 'https://1lib.in/dl/11951361/a2248b',
            book_name : 'Dr. S.S. DARA, BASIC ENGINEERING CHEMISTRY'
        },
        3 : {
            img : 'https://covers.zlibcdn2.com/covers/books/b4/1f/63/b41f6337e2bd7e8eb54b93d633de78ff.jpg' ,
            book_url : 'https://1lib.in/dl/926559/b9192e',
            book_name : 'K. L. Kumar, Engineering Mechanics, 3rd edition'
        },
        4 : {
            img : 'https://m.media-amazon.com/images/I/41pRH86A%2B7L.SX198_BO1,204,203,200_QL40_ML2.jpg' ,
            book_url : '',
            book_name : 'B. R. Patil, Basic Electrical Engineering',
        },
        5 : {
            img : '' ,
            book_url : '',
            book_name : '',
        }
    }

    for (var i = 0; i < grid_item.length; i++){
        grid_item[i].children[0].href = books[i].book_url;
        grid_item[i].children[0].children[0].src = books[i].img;
        grid_item[i].children[1].innerHTML = books[i].book_name;
    }
}

function render_sem3(){
    document.getElementById('sixth_img').style.display='block';
    books ={
        0 : {
            img : 'https://api.pdfdrive.to/media/content/thumbnails/8125431f-3b83-498b-8668-6f05e41b6b91.webp' ,
            book_url : 'https://zlibrary.to/pdfs/computer-graphics-c-version-2nd-ed-liaufc-pdf',
            book_name : 'Computer Graphics, C Version (2nd Ed.)'
        },
        1 : {
            img : 'https://www.technicalbookspdf.com/doc-images/3438.png' ,
            book_url : 'https://www.technicalbookspdf.com/download/?file=3438',
            book_name : 'Data Structures Using C, Reema Thareja'
        },
        2 : {
            img : 'https://api.pdfdrive.to/media/content/thumbnails/fbe2f83d-310a-4fd6-9f99-716f7491b350.webp' ,
            book_url : 'https://1lib.in/dl/11951361/a2248b',
            book_name : 'Computer Organization and Architecture: Designing for Performance (10th Ed.)'
        },
        3 : {
            img : 'https://www.bookwalas.com/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-28-at-11.41.04-AM.jpeg' ,
            book_url : 'https://civildatas.com/download/applied-mathematics-iii-by-kumbhojkar',
            book_name : 'Engineering Mathematics-3, G.V Kumbhojkar'
        },
        4 : {
            img : 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348697952l/28787.jpg' ,
            book_url : 'https://www.dbscience.org/wp-content/uploads/2020/03/Discrete_Mathematical_Structures-Kolman.pdf ',
            book_name : 'Discrete Mathematics, Kolman Busby Ross'
        },
        5 : {
            img : 'https://0.academia-photos.com/attachment_thumbnails/39501016/mini_magick20220704-13012-a0x201.png?1656919665' ,
            book_url : 'https://www.pdfdrive.com/head-first-java-2nd-d19984272.html',
            book_name : 'JAVA Head First',
        }
    }

    for (var i = 0; i < grid_item.length; i++){
        grid_item[i].children[0].href = books[i].book_url;
        grid_item[i].children[0].children[0].src = books[i].img;
        grid_item[i].children[1].innerHTML = books[i].book_name;
    }
}

