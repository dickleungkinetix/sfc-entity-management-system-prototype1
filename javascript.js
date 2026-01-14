// Combined JavaScript for all pages

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `search_result.html?query=${encodeURIComponent(query)}`;
        }
    }
}

// Initialize search elements
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-button');

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }

    // Search overlay focus/blur
    const searchOverlay = document.getElementById('searchOverlay');
    if (searchInput && searchOverlay) {
        searchInput.addEventListener('focus', () => {
            searchInput.value = '';
            searchInput.placeholder = '';
            searchOverlay.style.display = 'flex';
            void searchOverlay.offsetWidth;
            searchOverlay.style.opacity = '1';
            searchOverlay.style.transform = 'translateY(0) scale(1)';
        });

        searchInput.addEventListener('click', () => {
            const searchSection = document.querySelector('.search-section');
            if (searchSection) {
                searchSection.style.transform = 'translateY(-30px)';
            }
        });

        searchInput.addEventListener('blur', () => {
            searchInput.placeholder = 'Search entities by name, reference number, or type...';
            const searchSection = document.querySelector('.search-section');
            if (searchSection) {
                searchSection.style.transform = 'translateY(0px)';
            }
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchOverlay.contains(e.target)) {
                searchOverlay.style.opacity = '0';
                searchOverlay.style.transform = 'translateY(-20px) scale(0.98)';
                setTimeout(() => {
                    if (searchOverlay.style.opacity === '0') searchOverlay.style.display = 'none';
                }, 300);
            }
        });
    }

    // History tooltip
    const historyTrigger = document.getElementById('historyTrigger');
    const historyTooltip = document.getElementById('historyTooltip');
    if (historyTrigger && historyTooltip) {
        historyTrigger.addEventListener('mouseenter', () => historyTooltip.classList.add('visible'));
        historyTrigger.addEventListener('mouseleave', () => historyTooltip.classList.remove('visible'));
    }

    // Dashboard/Home switching
    const navHome = document.getElementById('navHome');
    const navDashboard = document.getElementById('navDashboard');
    const searchSection = document.getElementById('searchSection');
    const dashboardSection = document.getElementById('dashboardSection');
    const historySidebar = document.querySelector('.history-sidebar');

    function showDashboard() {
        if (navHome) navHome.classList.remove('active');
        if (navDashboard) navDashboard.classList.add('active');
        if (searchSection) searchSection.style.display = 'none';
        if (dashboardSection) dashboardSection.style.display = 'flex';
        if (historySidebar) historySidebar.style.display = 'none';
        const main = document.querySelector('main');
        if (main) main.style.paddingTop = '82px';
    }

    function showHome() {
        if (navDashboard) navDashboard.classList.remove('active');
        if (navHome) navHome.classList.add('active');
        if (searchSection) searchSection.style.display = 'flex';
        if (dashboardSection) dashboardSection.style.display = 'none';
        if (historySidebar) historySidebar.style.display = 'flex';
        const main = document.querySelector('main');
        if (main) main.style.paddingTop = '250px';
    }

    if (navHome) navHome.addEventListener('click', showHome);
    if (navDashboard) navDashboard.addEventListener('click', showDashboard);

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
        });
    });

    // Toggle switch
    const toggle = document.querySelector('.toggle-switch');
    if (toggle) {
        let isToggled = true;
        toggle.addEventListener('click', () => {
            isToggled = !isToggled;
            const knob = toggle.querySelector('.toggle-knob');
            if (toggle.style) toggle.style.backgroundColor = isToggled ? '#128C88' : '#ccc';
            if (knob) {
                knob.style.right = isToggled ? '1px' : 'auto';
                knob.style.left = isToggled ? 'auto' : '1px';
            }
            if (historySidebar) historySidebar.style.display = isToggled ? 'flex' : 'none';
        });
    }

    // Mega menu
    const menuIcon = document.getElementById('menuIcon');
    const megaMenu = document.getElementById('megaMenu');
    const mobileMegaMenu = document.getElementById('mobileMegaMenu');
    const megaMenuOverlay = document.getElementById('megaMenuOverlay');

    let isMegaMenuOpen = false;
    function toggleMegaMenu() {
        isMegaMenuOpen = !isMegaMenuOpen;
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            if (mobileMegaMenu) mobileMegaMenu.classList.toggle('visible', isMegaMenuOpen);
        } else {
            if (megaMenu) megaMenu.classList.toggle('visible', isMegaMenuOpen);
            if (megaMenuOverlay) megaMenuOverlay.classList.toggle('visible', isMegaMenuOpen);
        }
    }

    if (menuIcon) menuIcon.addEventListener('click', (e) => { e.stopPropagation(); toggleMegaMenu(); });
    if (megaMenuOverlay) megaMenuOverlay.addEventListener('click', toggleMegaMenu);

    document.querySelectorAll('.mega-menu-card, .mobile-mega-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.mega-menu-card, .mobile-mega-menu-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            if (item.id === 'mobileDashboard') {
                showDashboard();
            } else if (item.id === 'mobileHome') {
                window.location.href = 'index.html';
            }
            setTimeout(toggleMegaMenu, 200);
        });
    });

    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isMegaMenuOpen) toggleMegaMenu(); });

    window.addEventListener('resize', () => {
        if (isMegaMenuOpen) {
            const isMobile = window.innerWidth <= 768;
            if (mobileMegaMenu) mobileMegaMenu.classList.toggle('visible', isMobile);
            if (megaMenu) megaMenu.classList.toggle('visible', !isMobile);
            if (megaMenuOverlay) megaMenuOverlay.classList.toggle('visible', !isMobile);
        }
    });

    // Inbox Tabs interaction
    document.querySelectorAll('.inbox-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.inbox-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Inbox Filters interaction
    document.querySelectorAll('.inbox-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.inbox-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Table sorting
    const activitiesTable = document.querySelector('.activities-table');
    if (activitiesTable) {
        const activitiesTbody = activitiesTable.querySelector('tbody');
        const headers = activitiesTable.querySelectorAll('th');

        headers.forEach((header, index) => {
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                const type = header.getAttribute('data-type') || 'string';
                const rows = Array.from(activitiesTbody.rows);
                const isAscending = header.classList.contains('sort-asc');

                // Remove sorting classes from all headers
                headers.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));

                // Toggle sort direction
                header.classList.toggle('sort-asc', !isAscending);
                header.classList.toggle('sort-desc', isAscending);

                rows.sort((a, b) => {
                    const aVal = a.cells[index].textContent.trim();
                    const bVal = b.cells[index].textContent.trim();

                    if (type === 'date') {
                        // Parse dates like "18-Apr"
                        const parseDate = (str) => {
                            const [day, month] = str.split('-');
                            const monthMap = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
                            return new Date(2023, monthMap[month], parseInt(day));
                        };
                        const aDate = parseDate(aVal);
                        const bDate = parseDate(bVal);
                        return isAscending ? bDate - aDate : aDate - bDate;
                    } else {
                        return isAscending ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
                    }
                });

                // Reorder rows
                rows.forEach(row => activitiesTbody.appendChild(row));
            });
        });
    }

    // Search results specific
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query') || 'Looking for HSBC bank';
    const summaryTitle = document.querySelector('.summary-title');
    if (summaryTitle) {
        summaryTitle.textContent = `AI understands your question is: "${query}"`;
    }

    const selectedTagsContainer = document.getElementById('selected-tags');
    const unselectedTagsContainer = document.getElementById('unselected-tags');
    const resultsBody = document.getElementById('results-body');

    if (resultsBody) {
        // Mock data
        const allResults = [
            { name: 'HSBC Holdings plc', type: 'Business', ref: '0005.HK', desc: 'Major international banking and financial services company' },
            { name: 'Lion Bank in Hong Kong', type: 'Business', ref: 'LBK001', desc: 'Banking services in Hong Kong' },
            { name: 'HSBC Bank (China)', type: 'Listed Securities', ref: 'HSBC.CN', desc: 'HSBC operations in China' },
            { name: 'John Smith', type: 'Individual', ref: 'IND123', desc: 'Individual investor' },
            { name: 'Overseas HSBC Corp', type: 'Overseas Listed Securities', ref: 'OHSBC', desc: 'Overseas HSBC operations' },
            { name: 'General Entity', type: 'All', ref: 'GEN001', desc: 'General entity for testing' }
        ];

        // Calculate tag counts
        const tagCounts = {};
        tagCounts['All'] = allResults.length;
        allResults.forEach(result => {
            tagCounts[result.type] = (tagCounts[result.type] || 0) + 1;
        });

        let selectedTags = ['Business'];

        function addCountsToButtons() {
            document.querySelectorAll('.tag-btn').forEach(btn => {
                const tag = btn.getAttribute('data-tag');
                const count = tagCounts[tag] || 0;
                // Remove existing count if any
                const existingCount = btn.querySelector('.tag-count');
                if (existingCount) existingCount.remove();
                const countSpan = document.createElement('span');
                countSpan.className = 'tag-count';
                countSpan.textContent = count;
                btn.appendChild(countSpan);
            });
        }

        function updateResults() {
            const filteredResults = allResults.filter(result => selectedTags.includes(result.type) || selectedTags.includes('All'));
            resultsBody.innerHTML = filteredResults.map(result => `
                <tr>
                    <td data-label="Name" onclick="window.location.href='profile.html'" class="table-link">${result.name}</td>
                    <td data-label="Type">${result.type}</td>
                    <td data-label="Reference">${result.ref}</td>
                    <td data-label="Description">${result.desc}</td>
                </tr>
            `).join('');

            const recordCount = document.getElementById('record-count');
            if (recordCount) recordCount.textContent = `Search Record: ${filteredResults.length}`;

            // Save to localStorage
            localStorage.setItem('searchTagRecord', JSON.stringify(selectedTags));
        }

        function toggleTag(tag, btn) {
            if (selectedTags.includes(tag)) {
                selectedTags = selectedTags.filter(t => t !== tag);
                btn.classList.remove('selected');
                if (unselectedTagsContainer) unselectedTagsContainer.appendChild(btn);
            } else {
                selectedTags.push(tag);
                btn.classList.add('selected');
                if (selectedTagsContainer) selectedTagsContainer.appendChild(btn);
            }
            updateResults();
        }

        // Event listeners for tags
        document.querySelectorAll('.tag-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tag = btn.getAttribute('data-tag');
                toggleTag(tag, btn);
            });
        });

        // Load from localStorage if exists
        const savedTags = localStorage.getItem('searchTagRecord');
        if (savedTags) {
            selectedTags = JSON.parse(savedTags);
            document.querySelectorAll('.tag-btn').forEach(btn => {
                const tag = btn.getAttribute('data-tag');
                if (selectedTags.includes(tag)) {
                    btn.classList.add('selected');
                    if (selectedTagsContainer) selectedTagsContainer.appendChild(btn);
                } else {
                    btn.classList.remove('selected');
                    if (unselectedTagsContainer) unselectedTagsContainer.appendChild(btn);
                }
            });
            addCountsToButtons();
        }

        updateResults(); // Initial load
        addCountsToButtons();
    }

    // Results table sorting
    const resultsTable = document.getElementById('results-table-sortable');
    if (resultsTable) {
        const resultsTbody = resultsTable.querySelector('tbody');
        const headers = resultsTable.querySelectorAll('th');

        headers.forEach((header, index) => {
            header.addEventListener('click', () => {
                const rows = Array.from(resultsTbody.rows);
                const isAscending = header.classList.contains('sort-asc');

                // Remove sorting classes from all headers
                headers.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));

                // Toggle sort direction
                header.classList.toggle('sort-asc', !isAscending);
                header.classList.toggle('sort-desc', isAscending);

                rows.sort((a, b) => {
                    const aVal = a.cells[index].textContent.trim();
                    const bVal = b.cells[index].textContent.trim();
                    return isAscending ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
                });

                // Reorder rows
                rows.forEach(row => resultsTbody.appendChild(row));
            });
        });
    }
});
