
    var itemkey = 'Item'
    var itemkey1 = 0

    var a,a1,a2,a3,b1,b2,maindiv;
    maindiv = document.getElementById('maindiv')

function flow(){

    {

        for ( var i = 0, len = localStorage.length; i < len; ++i ) 
        
        {
            a1 = document.createElement('div')
            a4 = document.createElement('div')
            a2 = document.createElement('p')
            // a3 = localStorage.getItem(i)
            a1.className = 'itemdiv'
            a3 = localStorage.getItem( localStorage.key( i ) )
            a2.innerHTML = a3
            a1.appendChild(a2)
            b1 = document.createElement('input')
            b1.setAttribute('type', 'button')
            b1.setAttribute('value', 'Delete')
            b1.setAttribute('onclick', 'deleteItem(this)')
            b2 = document.createElement('input')
            b2.setAttribute('type', 'button')
            b2.setAttribute('value', 'Update')
            b2.setAttribute('onclick', 'update(this)')
            b1.className = 'innerbuttons'
            b2.className = 'innerbuttons'            
            // a1.appendChild(b1)
            // a1.appendChild(b2)
            a4.appendChild(b1)
            a4.appendChild(b2)
            a1.appendChild(a4)
            maindiv.appendChild(a1)
        
        
        }
        
        }
    document.getElementById('reload').disabled = true


}



function fooAdd(){


    a = document.getElementById('usertext')
    a1 = document.createElement('div')
    a4 = document.createElement('div')
    a2 = document.createElement('p')
    // a2.innerHTML = a
    // a1.appendChild(a2)
    // maindiv.appendChild(a1)
    // var b1 = document.createElement('input')
    // b1.setAttribute('type', 'button')
    // b1.setAttribute('value', 'Delete')
    // b1.setAttribute('onclick', 'deleteItem(this)')
    // a1.appendChild(b1)
    // maindiv.appendChild(a1)
    // var itemkey = 'Item'
    // var itemkey1 = 1
    // var itemkey2 = itemkey + itemkey1
    a1.className = 'itemdiv'

    var itemkey2 = itemkey + itemkey1
    console.log(itemkey2)
    localStorage.setItem(itemkey2, a.value)
    // a3 = a
    a2.innerHTML = a.value
    a1.appendChild(a2)
    b1 = document.createElement('input')
    b1.setAttribute('type', 'button')
    b1.setAttribute('value', 'Delete')
    b1.setAttribute('onclick', 'deleteItem(this)')
    b2 = document.createElement('input')
    b2.setAttribute('type', 'button')
    b2.setAttribute('value', 'Update')
    b2.setAttribute('onclick', 'update(this)')
    b1.className = 'innerbuttons'
    b2.className = 'innerbuttons'
    
    a4.appendChild(b1)
    a4.appendChild(b2)
    a1.appendChild(a4)
    maindiv.appendChild(a1)

    itemkey1++
    a.value = ''
    document.getElementById('reload').disabled = true


}

// for(s in localStorage)

// flow()

function deleteItem(node){

    console.log(node.parentNode.parentNode.firstChild.innerHTML)

    for ( var i = 0, len = localStorage.length; i < len; i++ ) {

        if(node.parentNode.parentNode.firstChild.innerHTML === localStorage.getItem( localStorage.key( i ) )){
            localStorage.removeItem( localStorage.key( i ) )
        }

    }

    // document.write(node.parentNode)
    node.parentNode.parentNode.remove()

}

function delA(){

    // for ( var i = 0, len = localStorage.length; i < len; i++ ) {

    //         localStorage.removeItem( localStorage.key( i ) )

    // }

    for (j in localStorage){
        localStorage.removeItem(j)
    }

    maindiv.innerHTML = ''


}

function update(o){

    var jj = o.parentNode.parentNode.firstChild.innerHTML
    var editItem = prompt('Enter New Value',o.parentNode.parentNode.firstChild.innerHTML)
    o.parentNode.parentNode.firstChild.innerHTML = editItem
    console.log(jj)
    for ( var i = 0, len = localStorage.length; i < len; i++ ) {

        if( jj === localStorage.getItem( localStorage.key( i ) )){
            localStorage.setItem( localStorage.key( i ), editItem )
        }

    }

}



