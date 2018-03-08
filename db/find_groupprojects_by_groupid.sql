SELECT project_id FROM group_project
    WHERE group_id = $1
    ORDER BY project_id
;