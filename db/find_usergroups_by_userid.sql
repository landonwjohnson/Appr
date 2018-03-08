SELECT group_id FROM user_group
    WHERE user_id = $1
    ORDER BY group_id
;