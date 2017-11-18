UPDATE group 
SET group_name = $2
WHERE user_id $1
;