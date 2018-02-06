DELETE FROM tracker_card 
WHERE list_order = $2 
AND project_id = $1;