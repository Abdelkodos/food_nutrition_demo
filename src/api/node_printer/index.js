var printer = require("node-thermal-printer")

printer.init({
    type: 'espon',
    interface: '/dev/usb/lp1'
})

printer.alignCenter()

printer.println("Hello, World")

printer.tableCustom()