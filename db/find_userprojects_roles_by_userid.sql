SELECT roles_id FROM user_project
  WHERE user_id = $1
  AND project_id = $2
  ORDER BY project_id
;