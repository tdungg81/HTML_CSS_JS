const company = {

    name: "RikkeiSoft",

    location: "Hà Nội",

    employees: [

        { name: "Nguyễn Văn Luận", position: "Developer" },

        { name: "Nguyễn Văn Hoàng", position: "Tester" },

        { name: "Hoàng Nam Cao", position: "Manager" }

    ]

};
console.log("Tên công ty:", company.name);
console.log("Tên các nhân viên:");
company.employees.forEach(({ name }) => console.log(`- ${name}`));


