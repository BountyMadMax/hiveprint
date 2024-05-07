pub mod storage;

use serde::{Deserialize, Serialize};

#[derive(Deserialize, Debug)]
pub struct Pagination {
  // `page` is optional and should be defaulted to 0.
  page: Option<i32>,
  // `page_size` is required because it determines the result.
  page_size: i32,
}

enum ModelFilterStringOperator {
  Equal,
  NotEqual,
  OneOf,
  Empty,
  NotEmpty,
}
  
enum ModelFilterIntegerOperator {
  Equal,
  NotEqual,
  OneOf,
  Empty,
  NotEmpty,
  Greater,
  Less,
  GreaterOrEqual,
  LessOrEqual,
}

fn convertToStringOperatorEnum(operator: &str) -> Option<ModelFilterStringOperator> {
  match operator {
    "=" => return Some(ModelFilterStringOperator::Equal),
    "!=" => return Some(ModelFilterStringOperator::NotEqual),
    "[]=" => return Some(ModelFilterStringOperator::OneOf),
    "=[]" => return Some(ModelFilterStringOperator::Empty),
    "!=[]" => return Some(ModelFilterStringOperator::NotEmpty),
    _ => return None,
  }
}

fn convertToIntegerOperatorEnum(operator: &str) -> Option<ModelFilterIntegerOperator> {
  match operator {
    "=" => return Some(ModelFilterIntegerOperator::Equal),
    "!=" => return Some(ModelFilterIntegerOperator::NotEqual),
    "[]=" => return Some(ModelFilterIntegerOperator::OneOf),
    "=[]" => return Some(ModelFilterIntegerOperator::Empty),
    "!=[]" => return Some(ModelFilterIntegerOperator::NotEmpty),
    ">" => return Some(ModelFilterIntegerOperator::Greater),
    ">=" => return Some(ModelFilterIntegerOperator::GreaterOrEqual),
    "<" => return Some(ModelFilterIntegerOperator::Less),
    "<=" => return Some(ModelFilterIntegerOperator::LessOrEqual),
    _ => return None,
  }
}
