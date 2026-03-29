import { initialCourses } from '../database/data.js';
import { THEME_KEYS } from '../constants/themeconstants.js';

class BookManager {
    constructor() {
        this.books = JSON.parse(localStorage.getItem("books")) || initialCourses;
        this.initTheme();
    }

    // Task 4: Theme Persistence Logic
    initTheme() {
        const saved = localStorage.getItem(THEME_KEYS.STORAGE_KEY) || THEME_KEYS.LIGHT;
        document.documentElement.classList.toggle('dark', saved === THEME_KEYS.DARK);
        document.getElementById('theme-icon').textContent = saved === THEME_KEYS.DARK ? "☀️" : "🌙";
    }

    // Task 6: 10+ String Methods Implementation
    formatData(str, type) {
        if (!str) return "";
        let clean = str.trim().toLowerCase().replace(/\s+/g, ' '); // 1, 2, 3: trim, toLower, replace
        
        if (type === 'title') {
            return clean.split(" ") // 4: split
                .map(w => w.charAt(0).toUpperCase() + w.slice(1)) // 5, 6, 7: charAt, toUpper, slice
                .join(" "); // 8: join
        }
        if (type === 'genre') return clean.toUpperCase().concat(" 📚"); // 9, 10: toUpper, concat
        return clean;
    }

    save() {
        localStorage.setItem("books", JSON.stringify(this.books));
        this.render();
    }

    // CRUD: CREATE
    add(book) {
        const formatted = {
            id: Date.now(), // Object Manipulation
            title: this.formatData(book.title, 'title'),
            author: this.formatData(book.author, 'title'),
            genre: this.formatData(book.genre, 'genre'),
            quantity: Number(book.quantity),
            createdAt: new Date().toISOString()
        };
        this.books.push(formatted); // Array.push()
        this.save();
    }

    // CRUD: DELETE
    delete(id) {
        this.books = this.books.filter(b => b.id !== id); // Array.filter()
        this.save();
    }

    // CRUD: READ & RENDER
    render(data = this.books) {
        const grid = document.getElementById('bookGrid');
        grid.innerHTML = data.map(b => `
            <div class="bg-white border dark:bg-gray-800 dark:border-gray-700 rounded-lg p-5 shadow-sm">
                <span class="text-blue-500 text-xs font-bold uppercase">${b.genre}</span>
                <h3 class="text-xl font-bold dark:text-white mt-1">${b.title}</h3>
                <p class="text-gray-500 dark:text-gray-400">By ${b.author}</p>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-sm dark:text-gray-300 font-medium">Qty: ${b.quantity}</span>
                    <div class="flex space-x-2">
                        <button onclick="window.deleteBook(${b.id})" class="text-red-600 text-sm font-bold">Delete</button>
                    </div>
                </div>
            </div>
        `).join(''); // Array.map()
    }
}

const manager = new BookManager();

// --- EXPOSE FUNCTIONS TO WINDOW FOR HTML ACCESS ---
window.deleteBook = (id) => manager.delete(id);

window.sortBy = (key) => {
    const sorted = [...manager.books].sort((a, b) => 
        typeof a[key] === 'string' ? a[key].localeCompare(b[key]) : b[key] - a[key]
    ); // Array.sort()
    manager.render(sorted);
};

window.filterTop = () => {
    const top = manager.books.filter(b => b.quantity > 10); // Array.filter()
    manager.render(top);
};

// Theme Toggle Click
document.getElementById('themeToggle').addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    const newTheme = isDark ? THEME_KEYS.DARK : THEME_KEYS.LIGHT;
    localStorage.setItem(THEME_KEYS.STORAGE_KEY, newTheme);
    document.getElementById('theme-icon').textContent = isDark ? "☀️" : "🌙";
});

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = manager.books.filter(b => 
        b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term)
    ); // Array.includes()
    manager.render(filtered);
});

// Form Submission
document.getElementById('bookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        genre: document.getElementById('genre').value,
        quantity: document.getElementById('quantity').value
    };
    manager.add(data);
    e.target.reset();
    // Use Flowbite's toggle to close modal
});

// Initial Load
manager.render();