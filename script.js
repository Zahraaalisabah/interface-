document.addEventListener('DOMContentLoaded', () => {

    const passwords = {
        manager: "1234",
        employee: "5678"
    };

    // تحقق من حالة الدخول المخزنة
    let isManager = sessionStorage.getItem('isManager') === 'true';
    let isEmployee = sessionStorage.getItem('isEmployee') === 'true';

    // طلب كلمة المرور إذا ماكو دخول سابق
    if (!isManager && !isEmployee) {
        const pass = prompt("ادخل كلمة المرور");

        if(pass === passwords.manager){
            isManager = true;
            sessionStorage.setItem('isManager', 'true');
        } else if(pass === passwords.employee){
            isEmployee = true;
            sessionStorage.setItem('isEmployee', 'true');
        } else {
            alert("كلمة المرور خاطئة");
            window.location.reload();
        }
    }

    // تحديث الوقت والتاريخ
    function updateTimeDate() {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('ar-IQ', { hour12: false });
        const dateStr = now.toLocaleDateString('ar-IQ', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        document.getElementById('time').textContent = timeStr;
        document.getElementById('date').textContent = dateStr;
    }

    setInterval(updateTimeDate, 1000);
    updateTimeDate();

    const iconCards = document.querySelectorAll('.icon-card');

    iconCards.forEach(card => {
        card.addEventListener('click', () => {

            const type = card.getAttribute('data-type');

            // ✅ كارت خاص جداً (يفتح Google Sheet)
            if(type === "special"){
                window.open("https://docs.google.com/spreadsheets/d/1ylmszYiZ1Vr2Q7cRRyQVOVWfA6jdvv0IghbJYeNDfX0/edit?gid=0#gid=0", "_blank");
                return;
            }

            if(!type){
                alert("لا يوجد قسم محدد");
                return;
            }

            // ✅ كارت المقابلات
if(type === "moqablat"){

    window.open(
        "https://docs.google.com/spreadsheets/d/1yYB4gTrgoBRD2T2Z2AVzc_miZqAMtvEZ7ahl4QbCMiU/edit?gid=0#gid=0",
        "_blank"
    );

    return;
}

// ✅ كارت المتابعة
if(type === "mutaba3a"){

    window.open(
        "https://docs.google.com/spreadsheets/d/1CmFHNJf_FCl5kD9RzXwnNVx7hMdV9KDUsdNCzd9jxt8/edit?gid=0#gid=0",
        "_blank"
    );

    return;
}
            // صلاحيات الدخول
            if(isManager || (isEmployee && card.id === "new-employee-card")){
                window.location.href = `category.html?type=${type}`;
                return;
            }

            if(isEmployee){
                alert("غير مصرح لك");
            }

        });
    });

});


// ====================== إضافة زبون ======================
document.addEventListener('DOMContentLoaded', () => {

    const customerForm = document.getElementById("customer-form");

    if(customerForm){
        customerForm.addEventListener("submit", function(e){
            e.preventDefault();

            const customer = {
                id: Date.now(),
                name: document.getElementById("name").value,
                phone: document.getElementById("phone").value,
                service: document.getElementById("service").value,
                price: document.getElementById("price").value,
                date: new Date().toLocaleDateString('ar-IQ')
            };

            let customers = JSON.parse(localStorage.getItem("customers")) || [];
            customers.push(customer);
            localStorage.setItem("customers", JSON.stringify(customers));

            alert("تم حفظ الزبون بنجاح");
        });
    }

});