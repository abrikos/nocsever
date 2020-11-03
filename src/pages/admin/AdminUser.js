import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import Store from "Store";

export default function AdminUser() {
    const [users, setUsers] = useState([])

    useEffect(init, [])

    function init() {
        Store.api('/admin/users').then(setUsers);
    }

    function setAdmin(user) {
        user.admin = !user.admin;
        Store.api(`/admin/user/${user._id}/change-admin`);
    }

    function setEditor(user) {
        user.editor = !user.editor;
        Store.api(`/admin/user/${user._id}/change-editor`);
    }

    function deleteUser(user) {
        if (!window.confirm('Удалить юзера?')) return;
        Store.api('/admin/user/delete', user)
            .then(() => {
                setUsers(users.filter(u => u.id !== user.id))
            })
    }

    return <div className="row">
        <table className="table-sm">
            <thead>
            <tr>
                <th>Юзер</th>
                <th>Login</th>
                <th>Стратегия</th>
                <th>Админ</th>
            </tr>
            </thead>
            <tbody>
            {users.map(u => <tr key={u.id}>

                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.id}</td>
                <td>
                    <input type="checkbox" defaultChecked={u.admin} onChange={() => setAdmin(u)}/> Администратор
                </td>
                <td>
                    <input type="checkbox" defaultChecked={u.editor} onChange={() => setEditor(u)}/> Редактор
                </td>
                <td>
                    <Button onClick={() => deleteUser(u)} variant="danger">Удалить</Button>
                </td>
            </tr>)}
            </tbody>
        </table>

    </div>

}
