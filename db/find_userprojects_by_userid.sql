SELECT project_id FROM user_project
  WHERE user_id = $1
  ORDER BY project_id
;