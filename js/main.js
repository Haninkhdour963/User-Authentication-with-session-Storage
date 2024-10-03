document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const category = document.getElementById('category');
    const ProductName = document.getElementById('ProductName');
    const price = document.getElementById('price');
    const image_url = document.getElementById('image_url');
    const tbody = document.querySelector('tbody');
    let editingIndex = null;

    function renderTable() {
        tbody.innerHTML = '';
        const data = JSON.parse(sessionStorage.getItem('data')) || [];
        data.forEach((item, index) => {
            const row = `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.category}</td>
                    <td>${item.ProductName}</td>
                    <td>${item.price}</td>
                    <td><img src="${item.image_url}" alt="${item.ProductName}" style="width: 50px; height: 50px;"></td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editData(${index})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteData(${index})">Delete</button>
                    </td>
                </tr>
            `;
            tbody.insertAdjacentHTML('beforeend', row);
        });
    }

    function saveData() {
        const categoryValue = category.value;
        const ProductNameValue = ProductName.value;
        const priceValue = price.value;
        const image_urlValue = image_url.value;

        const data = JSON.parse(sessionStorage.getItem('data')) || [];
        const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1; // Generate new ID

        if (editingIndex !== null) {
            data[editingIndex] = { id: data[editingIndex].id, category: categoryValue, ProductName: ProductNameValue, price: priceValue, image_url: image_urlValue };
            editingIndex = null;
        } else {
            data.push({ id: newId, category: categoryValue, ProductName: ProductNameValue, price: priceValue, image_url: image_urlValue });
        }
        sessionStorage.setItem('data', JSON.stringify(data));
        form.reset();
        renderTable();
    }

    window.editData = (index) => {
        const data = JSON.parse(sessionStorage.getItem('data'));
        const item = data[index];
        category.value = item.category;
        ProductName.value = item.ProductName;
        price.value = item.price;
        image_url.value = item.image_url;
        editingIndex = index;
    };

    window.deleteData = (index) => {
        const data = JSON.parse(sessionStorage.getItem('data'));
        data.splice(index, 1);
        sessionStorage.setItem('data', JSON.stringify(data));
        renderTable();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveData();
    });

    renderTable();
});
