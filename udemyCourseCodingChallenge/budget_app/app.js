
var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type){
        var sum = 0;

        data.allItems[type].forEach(function(current){
            sum += current.value
        });

        data.totals[type] = sum;
    };

    var data  = {
        allItems: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        },
        budget: 0,
        percentage: -1,
    };

    return{
        addItem: function(type, desc, val) {
            var newItem, ID;

            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else{
                ID = 0;
            }

            if(type === 'exp'){
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, desc, val);
            }

            data.allItems[type].push(newItem);
            return newItem;
        },


        calculateBudget: function() {

            // calculate total income and exp
            calculateTotal('exp');
            calculateTotal('inc');
            // calc budget: inc - exp
            data.budget = data.totals.inc - data.totals.exp;
            // calculate percentage of income that an expense is
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage = -1;
            }
        },


        getBudget: function() {
            return {
                budget: data.budget,
                totalIncome: data.totals.inc,
                totalExpenses: data.totals.exp,
                percentage: data.percentage
            }
        },


        testing: function(){
            console.log(data);
        }
    }

})();


var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
    }

    return {
        getInput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }

        },

        addListItem: function(obj, type){
            var html, newHtml, element;
            // create html string with place holder text
            if(type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }else if(type === 'exp'){
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            console.log(newHtml);

            // replace placeholder with data

            newHtml = html.replace('%id%', obj.id)
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', obj.value)

            // insert html into dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },


        clearField: function(){
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = '';
            });
            
            fieldsArr[0].focus();
        },


        getDOMstrings: function() {
            return DOMstrings;
        }
    }


})();


var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();


        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e){
            if(e.keycode === 13 || e.which === 13){
                ctrlAddItem();
            }
        })
    }


    var updateBudget = function() {
        // calc budget
        budgetCtrl.calculateBudget();

        // return budget
        var budget = budgetCtrl.getBudget();
        console.log(budget);

        // display budget
    }


    var ctrlAddItem = function(){
        var input, newItem;
        // get data
        input = UICtrl.getInput();

        if(input.description !== '' && !isNaN(input.value) && input.value > 0){
            // add item to budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // add item to UI
            UIController.addListItem(newItem, input.type);
            // ckear fieds
            UIController.clearField();
            // calc budget and display budget on ui
            updateBudget();
        }
    }

    return {
        init: function() {
            console.log('application has started');
            setupEventListeners();
        }
    }
})(budgetController, UIController);


controller.init();